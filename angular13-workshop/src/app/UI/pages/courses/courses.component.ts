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
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Oter course',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course: any) {
    this.selectedCourse = course
  }

  deleteCourse(id: number) {

  }

  reset() {
    this.selectCourse({...emptyCourse})
  }

}
