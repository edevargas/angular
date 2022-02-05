import { Component, OnInit } from '@angular/core';
import { CoursesControllerService } from 'src/app/Domain/controllers/courses/courses-controller.service';
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
  courses: Course[] = []

  constructor(private coursesController: CoursesControllerService) { }

  ngOnInit(): void {
    this.courses = this.coursesController.getAll()
  }

  selectCourse(course: Course) {
    this.selectedCourse = {...course}
    this.originalTitle = course.title
  }

  deleteCourse(id: string) {

  }

  reset() {
    this.selectCourse({...emptyCourse})
  }

  saveCourse(course: Course) {
    this.courses.push(course)
  }

}
