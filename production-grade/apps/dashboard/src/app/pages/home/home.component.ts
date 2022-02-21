import { Component, OnInit } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { WidgetsService } from '@devangular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'devangular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  widgets$: Observable<Widget[]>;
  constructor(private widgetService: WidgetsService) {
  }

  ngOnInit(): void {
    this.widgets$ = this.widgetService.all();
  }
}
