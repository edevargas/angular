import { Injectable } from '@nestjs/common';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';
import { Widget } from '@devangular/api-interfaces';
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class WidgetsService {
  mockWidgets: Widget[] = [
    {
      "id": "1",
      "title": "Remote Mock Widget 01",
      "description": "Duis officia nisi officia sint."
    },
    {
      "id": "2",
      "title": "Remote Mock Widget 02",
      "description": "Irure quis ullamco minim tempor occaecat consectetur sit do sit aliqua cillum voluptate ut minim."
    },
    {
      "id": "3",
      "title": "Remote Mock Widget 03",
      "description": "Aliqua dolor sint duis dolor proident laboris dolor sint enim aliqua amet laborum."
    }
  ];

  create(widget: Widget) {
    const newWidget =  Object.assign({}, widget, { id: uuidv4() });
    this.mockWidgets = [...this.mockWidgets, newWidget ];
    return  newWidget;
  }

  findAll() {
    return this.mockWidgets;
  }

  findOne(id: string) {
    return this.mockWidgets.find( (widget:Widget) => widget.id === id);
  }

  update(id: string, widget: Widget) {
    this.mockWidgets = this.mockWidgets.map((w: Widget) => (w.id === id ? widget : w))
    return  widget;
  }

  remove(id: string) {
    this.mockWidgets = this.mockWidgets.filter((w: Widget) => (w.id !== id));
    return  true;
  }
}
