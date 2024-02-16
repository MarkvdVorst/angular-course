import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({
    required: true
  })
  course: Course;

  @Output('courseSelected')
  courseEventEmitter = new EventEmitter<Course>();

  onCourseView() {
    console.log("card component - button clicked...");

    this.courseEventEmitter.emit(this.course);
  }
}
