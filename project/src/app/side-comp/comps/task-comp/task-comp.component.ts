import { Component, OnInit, Input } from '@angular/core';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-comp',
  templateUrl: './task-comp.component.html',
  styleUrls: ['./task-comp.component.css']
})
export class TaskCompComponent implements OnInit {

  @Input() ifBtn: boolean;

  faThumbtack = faThumbtack;

  constructor() { }

  ngOnInit() {
  }

}
