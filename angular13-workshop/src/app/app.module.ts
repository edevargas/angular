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
import { ExamplesComponent } from './UI/pages/examples/examples.component';
import { AdminComponent } from './UI/pages/examples/child-routes/admin.component';
import { AdminPayrollComponent } from './UI/pages/examples/child-routes/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './UI/pages/examples/child-routes/admin-vacation/admin-vacation.component';
import { AuthService } from './Infraestructure/services/auth/auth.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CoursesComponent,
        CourseDetailComponent,
        CoursesListComponent,
        AdminComponent,
        AdminPayrollComponent,
        AdminVacationComponent,
        ExamplesComponent
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule {}
