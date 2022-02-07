import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPayrollComponent } from 'src/app/UI/pages/examples/child-routes/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from 'src/app/UI/pages/examples/child-routes/admin-vacation/admin-vacation.component';
import { AdminComponent } from 'src/app/UI/pages/examples/child-routes/admin.component';
import { ExamplesComponent } from 'src/app/UI/pages/examples/examples.component';
import { ProtectedComponent } from 'src/app/UI/pages/examples/protected/protected.component';
import { RouteParamsComponent } from 'src/app/UI/pages/examples/route-params/route-params.component';
import { LoginComponent } from 'src/app/UI/pages/login/login.component';

import { CoursesComponent } from '../../UI/pages/courses/courses.component';
import { HomeComponent } from '../../UI/pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'examples',
        component: ExamplesComponent,
        children: [
            {
                path: 'child',
                component: AdminComponent,
                children: [
                    { path: 'payroll', component: AdminPayrollComponent },
                    { path: 'vacation', component: AdminVacationComponent },
                ],
            },
            { path: 'params', component: RouteParamsComponent },
            { path: 'params/:id', component: RouteParamsComponent },
            {
                path: 'protected',
                component: ProtectedComponent,
                canActivate: [AuthGuard],
            },
            {
                path: 'lazy',
                loadChildren: () =>
                    import('../../UI/pages/examples/lazy-module/lazy-module.module').then(
                        (m) => m.LazyModule
                    )
            },
        ],
    },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
