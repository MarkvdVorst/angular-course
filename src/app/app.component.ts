import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {core} from '@angular/compiler';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [...COURSES];

  protected readonly core = core;

  onCourseSelected (course: Course) {
    console.log("App component - click event button...", course)
  }

  trackCourse(index: number, course: Course){
    return course.id
  }

  protected readonly COURSES = COURSES;
}
