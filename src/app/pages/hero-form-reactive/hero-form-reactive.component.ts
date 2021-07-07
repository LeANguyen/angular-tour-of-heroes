import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.scss'],
})
export class HeroFormReactiveComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    alterEgo: new FormControl(''),
    power: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
