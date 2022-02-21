import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
