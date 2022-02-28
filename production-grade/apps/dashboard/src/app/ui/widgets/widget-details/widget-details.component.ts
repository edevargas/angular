import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
}
@Component({
  selector: 'devangular-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.scss']
})
export class WidgetDetailsComponent {
  currentWidget: Widget = emptyWidget;
  originalTitle = '';
  @Input() set widget(value: Widget | null) {
    if(value){
      this.originalTitle = value.title;
      this.currentWidget = {...value};
    }
  };
  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;

}
