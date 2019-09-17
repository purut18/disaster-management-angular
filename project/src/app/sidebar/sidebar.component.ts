import { Component, OnInit } from '@angular/core';
import { faHome, faArrowLeft, faThumbtack, faSitemap, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Location } from '@angular/common';
import { Router } from '@angular/router'

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
  currentUrl;

  constructor(private location: Location, private router: Router) {
    /* this.currentUrl = window.location.pathname.slice(1);   */
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.currentUrl = location.path().slice(1);
      } else {
        this.currentUrl = 'Home'
      }
    });  
  }

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
