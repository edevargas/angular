import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPayrollComponent } from 'src/app/UI/pages/examples/child-routes/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from 'src/app/UI/pages/examples/child-routes/admin-vacation/admin-vacation.component';
import { AdminComponent } from 'src/app/UI/pages/examples/child-routes/admin.component';
import { ExamplesComponent } from 'src/app/UI/pages/examples/examples.component';

import { CoursesComponent } from '../../UI/pages/courses/courses.component';
import { HomeComponent } from '../../UI/pages/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    {
        path: 'examples',
        component: ExamplesComponent,
        children: [
            {
                path: 'child',
                component: AdminComponent,
                children: [
                    { path: 'payroll', component: AdminPayrollComponent },
                    { path: 'vacation', component: AdminVacationComponent }
                ]
            }
        ]
    },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
