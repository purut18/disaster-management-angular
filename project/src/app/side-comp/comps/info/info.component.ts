import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  faInfo = faInfo;

  constructor() { }

  ngOnInit() {
  }

}
