
import { Widget } from '@devangular/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { widgetsAdapter, WidgetsState, WIDGETS_FEATURE_KEY } from './widgets.reducer';

// Lookup the 'Widgets' feature state managed by NgRx
export const selectWidgetsState = createFeatureSelector<
  WidgetsState
>(WIDGETS_FEATURE_KEY);

const { selectAll, selectEntities } = widgetsAdapter.getSelectors();

export const selectWidgetsLoaded = createSelector(
  selectWidgetsState,
  (state: WidgetsState) => state.loaded
);

export const selectWidgetsError = createSelector(
  selectWidgetsState,
  (state: WidgetsState) => state.error
);

export const selectAllWidgets = createSelector(
  selectWidgetsState,
  (state: WidgetsState) => selectAll(state)
);

export const selectWidgetsEntities = createSelector(
  selectWidgetsState,
  (state: WidgetsState) => selectEntities(state)
);

export const selectSelectedWidgetId = createSelector(
  selectWidgetsState,
  (state: WidgetsState) => state.selectedId
);

const emptyWidget: Widget = {
  id: "",
  title: '',
  description: '',
};

export const selectSelectedWidget = createSelector(
  selectWidgetsEntities,
  selectSelectedWidgetId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyWidget;
  }
);
