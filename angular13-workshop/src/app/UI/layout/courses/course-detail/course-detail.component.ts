import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/Infraestructure/models/course';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent {
    @Output() saved = new EventEmitter();
    @Output() cancelled = new EventEmitter();
    @Input() set course(value) {
        if(!value) return;
        this.currentCourse = {...value}
        this.originalTitle = this.currentCourse.title
    }
    currentCourse: Course;
    originalTitle = '';
}
