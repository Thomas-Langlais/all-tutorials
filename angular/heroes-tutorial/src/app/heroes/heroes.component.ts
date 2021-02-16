import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = null;

  constructor() { }

  ngOnInit(): void {
    
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };

  }

}
