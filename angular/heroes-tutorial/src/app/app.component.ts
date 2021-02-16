import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

interface NavLink {
  url: string,
  label: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Tour of Heroes';
  navRoutes: NavLink[];

  constructor(public location: Location) { }

  ngOnInit(): void {
    this.navRoutes = [
      {
        label: 'Dashboard',
        url: '/dashboard'
      },
      {
        label: 'Heroes',
        url: '/heroes'
      }
    ];
  }
}
