import { Component, OnInit } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { WidgetsService } from '@devangular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'devangular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  constructor(private widgetService: WidgetsService) {

  }

  ngOnInit(): void {
    this.widgets$ = this.widgetService.all();
  }

  toggleSideNav(): void {
    console.log("toggle")
  }

  logout(): void {
    console.log("logout")
  }
}
