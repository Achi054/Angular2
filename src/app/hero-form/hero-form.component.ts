import { Component, OnInit } from '@angular/core';
import { HeroDetails } from '../hero-details';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers: string[];
  model: HeroDetails;
  submitted: boolean;

  constructor() {
    this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
    this.model = new HeroDetails(1, "Dr. Dre", this.powers[1], 'Chuck Overstreet');
    this.submitted = false;
  }

  ngOnInit() {
  }

  onSubmit(): void{
    this.submitted = true;
  }
}
