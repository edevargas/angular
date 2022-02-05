import { Injectable } from '@angular/core';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[] = [
    {
      id: "1",
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 12,
      favorite: true
    },
    {
      id: "2",
      title: 'Oter course',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 98,
      favorite: true
    }
  ];

  constructor() { }
}
