import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HeroService } from '../../services/hero.service';
import { HeroActionTypes } from './hero.actions';
import * as heroActions from './hero.actions';

@Injectable({
  providedIn: 'root',
})
export class HeroEffects {
  constructor(private actions$: Actions, private heroService: HeroService) {}

  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActionTypes.GET_HEROES),
      switchMap((action) =>
        this.heroService.getHeroes().pipe(
          map((response) => {
            console.log('response:::', response);
            return new heroActions.ActionGetHeroesSuccess({ heroes: response });
          }),
          catchError((error: any) =>
            of(new heroActions.ActionErrorHero({ message: error }))
          )
        )
      )
    )
  );
}
