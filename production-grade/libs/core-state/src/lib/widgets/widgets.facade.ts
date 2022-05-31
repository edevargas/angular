import { Injectable } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { Subject } from 'rxjs';
import { WidgetsService } from '@devangular/core-data';

@Injectable()
export class WidgetsFacade {
  private allWidgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget | null>();
  mutations = new Subject();

  allWidgets$ = this.allWidgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetsService: WidgetsService) {
  }


  reset() {
    this.mutations.next(true);
  }

  selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }

  loadWidgets() {
    this.widgetsService
      .all()
      .subscribe((widgets: Widget[]) => this.allWidgets.next(widgets));
  }

  saveWidget(widget: Widget) {
    if(widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    this.widgetsService.create(widget).subscribe((_) => this.reset());
  }

  updateWidget(widget: Widget) {
    this.widgetsService.update(widget).subscribe((_) => this.reset());
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.delete(widget).subscribe((_) => this.reset());
  }
}
