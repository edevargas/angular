import { Component, OnInit } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { WidgetsService } from '@devangular/core-data';
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
  selectedWidget: Widget;

  widgets$: Observable<Widget[]>;

  constructor(private widgetService: WidgetsService) {
    this.selectedWidget = emptyWidget
  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(emptyWidget);
  }

  resetForm() {
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  loadWidgets() {
    this.widgets$ = this.widgetService.all();
  }

  saveWidget(widget: Widget) {
    if(widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  async createWidget(widget: Widget) {
    await this.widgetService.create(widget);
    this.loadWidgets();
    this.resetForm();
  }

  async updateWidget(widget: Widget) {
    await this.widgetService.update(widget);
    this.loadWidgets();
    this.resetForm();
  }

  async deleteWidget(widget: Widget) {
    await this.widgetService.delete(widget);
    this.loadWidgets();
    this.resetForm();
  }

  private getRandomID() {
    return Math.random().toString(36).substring(7);
  }
}
