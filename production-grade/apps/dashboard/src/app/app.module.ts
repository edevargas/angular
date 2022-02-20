import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CoreDataModule, coreDataRoutes } from '@devangular/core-data';
import { RoutingModule } from './routing.module';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { DetailsComponent } from './widgets/details/details.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule, materialRoutes } from '@devangular/material';
import { CoreStateModule, coreStateRoutes } from '@devangular/core-state';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    WidgetsListComponent,
    DetailsComponent,
    WidgetsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    RoutingModule,
    MaterialModule,
    CoreStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
