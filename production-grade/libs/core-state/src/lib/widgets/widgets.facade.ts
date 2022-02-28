import { Injectable } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { Subject } from 'rxjs';
import { WidgetsService } from '@devangular/core-data';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetService: WidgetsService) {
  }

  loadWidgets() {
    this.widgetService
      .all()
      .subscribe( (widgets: Widget[]) => this.allWidgets.next(widgets));
  }

  selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }
}
