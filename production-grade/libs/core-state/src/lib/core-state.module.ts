import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WidgetsEffects } from './widgets/widgets.effects';
import { WidgetsFacade } from './widgets/widgets.facade';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

export const coreStateRoutes: Route[] = [];

const STORE_NAME = 'devangular-store';
const storeConfig: RootStoreConfig<any, any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictActionSerializability: true,
    strictStateImmutability: true,
    strictStateSerializability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([WidgetsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
  ],
  providers: [WidgetsFacade],
})
export class CoreStateModule {}
