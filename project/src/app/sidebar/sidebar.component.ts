import { Component, OnInit } from '@angular/core';
import { faHome, faArrowLeft, faThumbtack, faSitemap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isBigWidth = false;

  faHome = faHome;
  faThumbtack = faThumbtack;
  faSitemap = faSitemap;
  faBars = faBars;
  faTimes = faTimes;
  faArrowLeft = faArrowLeft;

  constructor() { }

  ngOnInit() {
  }

  toggleBigWidth = () => {
    this.isBigWidth = !this.isBigWidth;
  }

  closeIcon = () => {
    if (!this.isBigWidth) { return faBars; }
    else { return faTimes; }

  }

}
