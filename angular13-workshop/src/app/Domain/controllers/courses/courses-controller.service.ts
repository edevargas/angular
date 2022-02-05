import { Injectable } from '@angular/core';
import { CoursesService } from 'src/app/Infraestructure/services/courses/courses.service';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesControllerService {

  constructor(private coursesService: CoursesService) { }

  getAll(): Course[] {
    return this.coursesService.courses
  }
}
