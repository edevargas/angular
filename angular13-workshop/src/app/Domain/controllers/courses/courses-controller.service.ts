import { Injectable } from '@angular/core';
import { CoursesService } from 'src/app/Infraestructure/services/courses/courses.service';
import { Course } from '../../models/course';
import { courseMapper } from '../../mappers/CourseMapper';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CoursesControllerService {
    courses: Course[] = [];
    courses$: any;

    constructor(private coursesService: CoursesService) {}

    getAll(): void {
        this.courses$ = this.coursesService.all();
        // this.coursesService
        //     .all()
        //     .subscribe((result: Course[]) => {
        //         this.courses = result
        //     });
    }

    save(course: Course) {
        console.log({id:course.id})
        if (course.id) {
            this.update(course);
        } else {
            this.create(course);
        }
    }

    create(course: Course) {
        const courseIf = courseMapper.mapDomainCourseToIFCourse(course);
        this.coursesService
            .create(courseIf)
            .subscribe((result) => this.getAll());
    }

    update(course: Course) {
        const courseIf = courseMapper.mapDomainCourseToIFCourse(course);
        this.coursesService
            .update(courseIf)
            .subscribe((result) => this.getAll());
    }
}
