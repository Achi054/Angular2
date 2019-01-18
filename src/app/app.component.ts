import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  myHero: Hero;
  heroes: Hero[];
  angularImagePath: string;
  fontSizePx: number;
  index: 5;
  color: string;

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Batman'),
      new Hero(2, 'Superman'),
      new Hero(3, 'Aquaman'),
      new Hero(4, 'Flash')
    ];
    this.myHero = this.heroes[0];
    // tslint:disable-next-line:max-line-length
    this.angularImagePath = 'https://vignette.wikia.nocookie.net/marvel_dc/images/2/2e/DC_Comics_The_Ultimate_Guide.jpg/revision/latest?cb=20170310040116';
    this.fontSizePx = 15;
  }

  deleteHero(hero: Hero): void {
    this.heroes.splice(this.heroes.findIndex(x => x.id === hero.id), 1);
  }

  addHero(heroName: string): void {
    this.heroes.push(new Hero(this.index, heroName));
    this.index++;
  }
}
