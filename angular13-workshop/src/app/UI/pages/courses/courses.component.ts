import { Component, OnInit } from '@angular/core';
import { CoursesControllerService } from 'src/app/Domain/controllers/courses/courses-controller.service';
import { Course } from 'src/app/Domain/models/course';

const emptyCourse: Course = {
    id: null,
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
};
@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
    selectedCourse = emptyCourse;
    courses: Course[] = [];

    constructor(public coursesController: CoursesControllerService) {}

    ngOnInit(): void {
        this.fetchCourses();
    }

    fetchCourses(): void {
        this.coursesController.getAll();
    }

    selectCourse(course: Course) {
        this.selectedCourse = course;
    }

    deleteCourse(id: string) {}

    reset() {
        this.selectCourse({ ...emptyCourse });
    }

    saveCourse(course: Course) {
        this.coursesController.save(course);
    }
}
