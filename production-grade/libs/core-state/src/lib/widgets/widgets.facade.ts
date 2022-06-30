
import { Injectable } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { Action, ActionsSubject, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as WidgetsActions from './widgets.actions';
import * as WidgetsSelectors from './widgets.selectors';

@Injectable()
export class WidgetsFacade {
  loaded$ = this.store.select(WidgetsSelectors.selectWidgetsLoaded);
  allWidgets$ = this.store.select(WidgetsSelectors.selectAllWidgets);
  selectedWidget$ = this.store.select(WidgetsSelectors.selectSelectedWidget);

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === WidgetsActions.createWidget({} as any).type ||
      action.type === WidgetsActions.updateWidget({} as any).type ||
      action.type === WidgetsActions.deleteWidget({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) { }

  selectWidget(selectedId: string) {
    this.dispatch(WidgetsActions.selectWidget({ selectedId }));
  }

  loadWidgets() {
    this.dispatch(WidgetsActions.loadWidgets());
  }

  loadWidget(widgetId: string) {
    this.dispatch(WidgetsActions.loadWidget({ widgetId }));
  }

  saveWidget(widget: Widget) {
    if(widget.id) {
      this.updateWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    this.dispatch(WidgetsActions.createWidget({ widget }));
  }

  updateWidget(widget: Widget) {
    this.dispatch(WidgetsActions.updateWidget({ widget }));
  }

  deleteWidget(widget: Widget) {
    this.dispatch(WidgetsActions.deleteWidget({ widget }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
