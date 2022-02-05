import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/Domain/models/course';

const emptyCourse: Course = {
  id: null,
  title: "",
  description: "",
  percentComplete: 0,
  favorite: false
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = emptyCourse;
  originalTitle = ""
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 12,
      favorite: true
    },
    {
      id: 2,
      title: 'Oter course',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 98,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  selectCourse(course: Course) {
    this.selectedCourse = {...course}
    this.originalTitle = course.title
  }

  deleteCourse(id: number) {

  }

  reset() {
    this.selectCourse({...emptyCourse})
  }

  saveCourse(course: Course) {
    this.courses.push(course)
  }

}
