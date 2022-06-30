import { Injectable } from '@angular/core';
import { Widget } from '@devangular/api-interfaces';
import { WidgetsService } from '@devangular/core-data';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as WidgetsActions from './widgets.actions';


@Injectable()
export class WidgetsEffects {
  loadWidgets$ = createEffect(() => { return this.actions$.pipe(
    ofType(WidgetsActions.loadWidgets),
    fetch({
      run: (action) =>
        this.widgetsService
          .all()
          .pipe(
            map((widgets: Widget[]) =>
              WidgetsActions.loadWidgetsSuccess({ widgets })
            )
          ),
      onError: (action, error) => WidgetsActions.loadWidgetsFailure({ error }),
    })
  ) });

  loadWidget$ = createEffect(() => { return this.actions$.pipe(
    ofType(WidgetsActions.loadWidget),
    fetch({
      run: (action) =>
        this.widgetsService
          .find(action.widgetId)
          .pipe(
            map((widget: Widget) =>
              WidgetsActions.loadWidgetSuccess({ widget })
            )
          ),
      onError: (action, error) => WidgetsActions.loadWidgetFailure({ error }),
    })
  ) });

  createWidget$ = createEffect(() => { return this.actions$.pipe(
    ofType(WidgetsActions.createWidget),
    pessimisticUpdate({
      run: (action) =>
        this.widgetsService
          .create(action.widget)
          .pipe(
            map((widget: Widget) =>
              WidgetsActions.createWidgetSuccess({ widget })
            )
          ),
      onError: (action, error) => WidgetsActions.createWidgetFailure({ error }),
    })
  ) });

  updateWidget$ = createEffect(() => { return this.actions$.pipe(
    ofType(WidgetsActions.updateWidget),
    pessimisticUpdate({
      run: (action) =>
        this.widgetsService
          .update(action.widget)
          .pipe(
            map((widget: any) =>
              WidgetsActions.updateWidgetSuccess({ widget })
            )
          ),
      onError: (action, error) => WidgetsActions.updateWidgetFailure({ error }),
    })
  ) });

  deleteWidget$ = createEffect(() => { return this.actions$.pipe(
    ofType(WidgetsActions.deleteWidget),
    pessimisticUpdate({
      run: ({ widget }) =>
        this.widgetsService
          .delete(widget)
          .pipe(
            map((wasDeleted: any) =>
              WidgetsActions.deleteWidgetSuccess({ widget })
            )
          ),
      onError: (action, error) => WidgetsActions.deleteWidgetFailure({ error }),
    })
  ) });

  constructor(
    private actions$: Actions,
    private widgetsService: WidgetsService
  ) {}
}
