import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AppState, selectHeroes } from 'src/app/store/hero/hero.selectors';
import * as heroActions from '../../store/hero/hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes$?: Observable<Hero[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    this.store.dispatch(new heroActions.ActionGetHeroes());
    this.heroes$ = this.store.pipe(select(selectHeroes));
    this.heroes$.subscribe((heroes) => console.log('heroes:::', heroes));
  }

  delete(id: number): void {
    // this.heroService.deleteHero(id).subscribe();
    this.store.dispatch(new heroActions.ActionDeleteHero({ id: id }));
  }
}
