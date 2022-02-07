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
import { RouteParamsComponent } from './UI/pages/examples/route-params/route-params.component';
import { ProtectedComponent } from './UI/pages/examples/protected/protected.component';
import { AuthGuard } from './Application/routing/guards/auth.guard';
import { LoginComponent } from './UI/pages/login/login.component';
import { DynamicComponent } from './UI/pages/examples/dynamic-component/dynamic-component.component';
import { SquareComponent } from './UI/pages/examples/dynamic-component/square/square.component';
import { CircleComponent } from './UI/pages/examples/dynamic-component/circle/circle.component';
import { TriangleComponent } from './UI/pages/examples/dynamic-component/triangle/triangle.component';

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
        ExamplesComponent,
        RouteParamsComponent,
        ProtectedComponent,
        LoginComponent,
        DynamicComponent,
        CircleComponent,
        SquareComponent,
        TriangleComponent
    ],
    providers: [AuthService, AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
