import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Tasks } from './tasks'; 

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  faPlus = faPlus;

  submitted = false;

  taskModel = new Tasks('', '', '');
  orgs = ['IT', 'HR', 'Police'];

  constructor() { }

  ngOnInit() {
  }

  onSubmit = () => {
    this.submitted = !this.submitted;
  }

}
