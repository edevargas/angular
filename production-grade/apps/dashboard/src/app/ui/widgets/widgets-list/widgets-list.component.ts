import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';

@Component({
  selector: 'devangular-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent {
  @Input() widgets: Widget[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
