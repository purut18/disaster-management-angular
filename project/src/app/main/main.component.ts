import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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

}
