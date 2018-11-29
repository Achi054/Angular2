import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;
  details = `Because I'm `;
  constructor() { }

  ngOnInit() {
  }

  displayDetails(): void {
    this.details = this.details + this.hero.name;
  }
}
