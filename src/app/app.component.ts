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

  title = COURSES[0].description;

  price = 9.99952952952952;

  rate = 0.67;

  startDate = new Date(2000, 0, 1);

  protected readonly core = core;

  onCourseSelected (course: Course) {
    console.log("App component - click event button...", course)
  }

  trackCourse(index: number, course: Course){
    return course.id
  }

  protected readonly COURSES = COURSES;
}
