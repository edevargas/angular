import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './Application/routing/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './Application/material/material.module';
import { HomeComponent } from './UI/pages/home/home.component';
import { CoursesComponent } from './UI/pages/courses/courses.component';
import { FormsModule } from '@angular/forms';
import { CoursesListComponent } from './UI/layout/courses/courses-list/courses-list.component';
import { CourseDetailComponent } from './UI/layout/courses/course-detail/course-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent, HomeComponent, CoursesComponent, CoursesListComponent, CourseDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
