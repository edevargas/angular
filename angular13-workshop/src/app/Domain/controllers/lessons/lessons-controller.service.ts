import { Injectable } from '@angular/core';
import { LessonsService } from 'src/app/Infraestructure/services/lessons/lessons.service';
import { Lesson } from '../../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsControllerService {

  constructor(private lessonService: LessonsService) { }
  lessons$;

  getAll(): Lesson[] {
    this.lessons$ = this.lessonService.lessons$
    return this.lessonService.lessons
  }

}
