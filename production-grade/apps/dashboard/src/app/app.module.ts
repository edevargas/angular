import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@devangular/core-data';
import { CoreStateModule } from '@devangular/core-state';
import { MaterialModule } from '@devangular/material';
import { UiToolbarModule } from '@devangular/ui-toolbar';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { RoutingModule } from './routing.module';
import { WidgetDetailsComponent } from './ui/widgets/widget-details/widget-details.component';
import { WidgetsListComponent } from './ui/widgets/widgets-list/widgets-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetDetailsComponent,
    HomeComponent,
    WidgetsComponent,
    WidgetsListComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
