import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {core} from '@angular/compiler';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<CourseCardComponent>;

  title = COURSES[0].description;

  protected readonly core = core;

  @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.cards);
  }

  onCourseSelected(course: Course) {
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }

  protected readonly COURSES = COURSES;

  onCoursesEdited() {
    this.courses.push(
      {
        id: 1,
        description: "Angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
      }
    );
  }
}
