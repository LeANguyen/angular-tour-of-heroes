import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { FormBuilder, Validators } from '@angular/forms';
import { requiredWhitespace } from '../../utils/validators';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState, selectHeroes } from 'src/app/store/hero/hero.selectors';
import { HeroState } from 'src/app/store/hero/hero.reducer';
import * as heroActions from '../../store/hero/hero.actions';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit, AfterViewInit {
  // Hero Form vars
  addForm;

  // Hero List vars
  // heroes: Hero[] = [];
  heroes$?: Observable<Hero[]>;

  @ViewChild('newName') newName: any;

  constructor(
    private heroService: HeroService,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.addForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength, requiredWhitespace],
      ],
    });
  }

  ngAfterViewInit(): void {
    console.log(this.newName);
  }

  ngOnInit() {
    this.store.dispatch(new heroActions.ActionGetHeroes());
    this.getHeroes();
  }

  get name() {
    return this.addForm.get('name');
  }

  // Hero Form methods
  add(): void {
    if (this.addForm.invalid) {
      return;
    }
    this.heroService
      .addHero({ name: this.name?.value } as Hero)
      .subscribe((hero) => {
        // this.heroes.push(hero);
        this.name?.setValue('');
      });
  }

  // Hero List methods
  getHeroes(): void {
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.heroes$ = this.store.pipe(select(selectHeroes));
  }

  delete(hero: Hero): void {
    // this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
