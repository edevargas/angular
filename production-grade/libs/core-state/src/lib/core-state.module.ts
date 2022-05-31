import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWidgets from './widgets/widgets.reducer';
import { WidgetsEffects } from './widgets/widgets.effects';
import { WidgetsFacade } from './widgets/widgets.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const coreStateRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(fromWidgets.reducer),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    EffectsModule.forRoot([
      WidgetsEffects
    ]),
  ],
  providers: [WidgetsFacade],
})
export class CoreStateModule {}
