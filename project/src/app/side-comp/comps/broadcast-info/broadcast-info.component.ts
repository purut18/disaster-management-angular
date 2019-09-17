import { Component, OnInit } from '@angular/core';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { Message } from './message';

@Component({
  selector: 'app-broadcast-info',
  templateUrl: './broadcast-info.component.html',
  styleUrls: ['./broadcast-info.component.css']
})
export class BroadcastInfoComponent implements OnInit {


  faBullhorn = faBullhorn;
  submitted = false;

  name = "";
  loc = "";
  whoTo;
  sendTo = ['Puru', 'Aayush', 'Jainil'];

  messageModel = new Message('', '', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit = () => {
    this.submitted = !this.submitted;
  }

}
