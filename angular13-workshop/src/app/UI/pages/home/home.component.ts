import { Component, OnInit } from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { LessonsControllerService } from 'src/app/Domain/controllers/lessons/lessons-controller.service';
import { Lesson } from 'src/app/Domain/models/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedLesson: any;
  courseLessons: Lesson[] = []

  constructor(private lessonsController: LessonsControllerService) {}

  ngOnInit() {
    this.courseLessons = this.lessonsController.getAll()
  }

  selectLesson(lesson: any) {
    this.selectedLesson = lesson;
  }
}
