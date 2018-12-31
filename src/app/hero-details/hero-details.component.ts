import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero;
  details = `Because I'm `;
  isGreen = false;
  @Output() deleteRequest = new EventEmitter<Hero>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    return this.deleteRequest.emit(this.hero);
  }

  displayDetails(): string {
    return this.details + this.hero.name;
  }
}
