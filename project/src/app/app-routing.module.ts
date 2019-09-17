import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './side-comp/dashboard/dashboard.component';
import { TasksComponent } from './side-comp/tasks/tasks.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrgComponent } from './side-comp/org/org.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'organisations', component: OrgComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DashboardComponent,
  TasksComponent,
  PageNotFoundComponent,
  OrgComponent
];
