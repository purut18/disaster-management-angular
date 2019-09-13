import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { SideCompComponent } from './side-comp/side-comp.component';
import { TasksComponent } from './side-comp/tasks/tasks.component';
import { DashboardComponent } from './side-comp/dashboard/dashboard.component';
import { TaskCompComponent } from './side-comp/comps/task-comp/task-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SideCompComponent,
    TasksComponent,
    DashboardComponent,
    routingComponents,
    TaskCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
