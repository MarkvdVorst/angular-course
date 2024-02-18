import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output, QueryList,
  ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit{
  @Input()
  course: Course;

  @Input()
  index: number;

  @Output('courseSelected')
  courseEventEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  ngAfterViewInit(): void {

  }

  onCourseView() {
    this.courseEventEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {'background-image': 'url(' + this.course.iconUrl + ')'};
  }
}
