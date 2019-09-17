import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './main/main.component';
import { SideCompComponent } from './side-comp/side-comp.component';
import { TaskCompComponent } from './side-comp/comps/task-comp/task-comp.component';
import { BroadcastInfoComponent } from './side-comp/comps/broadcast-info/broadcast-info.component';
import { InfoComponent } from './side-comp/comps/info/info.component';
import { AddTaskComponent } from './side-comp/comps/add-task/add-task.component';
import { OrgComponent } from './side-comp/org/org.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SideCompComponent,
    routingComponents,
    TaskCompComponent,
    BroadcastInfoComponent,
    InfoComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
