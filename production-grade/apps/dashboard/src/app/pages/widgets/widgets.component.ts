import { Component, OnInit } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { WidgetsFacade } from '@devangular/core-state';
import { Observable } from 'rxjs';

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
}

@Component({
  selector: 'devangular-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]> = this.widgetFacade.allWidgets$;
  selectedWidget$: Observable<Widget> = this.widgetFacade.selectedWidget$;

  constructor(private widgetFacade: WidgetsFacade) {
    this.selectWidget({...emptyWidget});
  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget({...emptyWidget});
  }

  resetForm() {
    this.selectWidget({...emptyWidget});
  }

  selectWidget(widget: Widget) {
    this.widgetFacade.selectWidget(widget);
  }

  loadWidgets() {
    this.widgetFacade.loadWidgets();
  }

  saveWidget(widget: Widget) {
    if(widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {

    this.loadWidgets();
    this.resetForm();
  }

  updateWidget(widget: Widget) {
    this.loadWidgets();
    this.resetForm();
  }

  deleteWidget(widget: Widget) {
    //this.widgetService.delete(widget);
    this.loadWidgets();
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
