import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { requiredWhitespace } from 'src/app/utils';
import * as heroActions from '../../store/hero/hero.actions';
import { Hero } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/hero/hero.selectors';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  heroForm;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.heroForm = this.fb.group({
      name: ['', [Validators.required, requiredWhitespace]],
    });
  }

  ngOnInit(): void {}

  // Hero Form methods
  add(name: string): void {
    if (this.heroForm.invalid) {
      return;
    }
    console.log(this.heroForm.get('name')?.value);
    this.store.dispatch(
      new heroActions.ActionAddHero({
        hero: { name } as Hero,
      })
    );
  }

  test(): void {
    console.log(this.heroForm.get('name')?.value);
  }
}
