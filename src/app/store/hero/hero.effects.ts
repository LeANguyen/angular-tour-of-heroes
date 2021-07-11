import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HeroService } from '../../services/hero.service';
import { HeroActionTypes, HeroActions } from './hero.actions';
import * as heroActions from './hero.actions';

@Injectable({
  providedIn: 'root',
})
export class HeroEffects {
  constructor(
    private actions$: Actions<HeroActions>,
    private heroService: HeroService
  ) {}

  getHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActionTypes.GET_HERO),
      switchMap((action) =>
        this.heroService.getHero(action.payload.id).pipe(
          map((response) => {
            console.log('response:::', response);
            return new heroActions.ActionGetHeroSuccess({ hero: response });
          }),
          catchError((error: any) =>
            of(new heroActions.ActionHeroErrors({ errors: error }))
          )
        )
      )
    )
  );

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
            of(new heroActions.ActionHeroErrors({ errors: error }))
          )
        )
      )
    )
  );

  addHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActionTypes.ADD_HERO),
      switchMap((action) =>
        this.heroService.addHero(action.payload.hero).pipe(
          map((response) => {
            console.log('response:::', response);
            return new heroActions.ActionAddHeroSuccess({ hero: response });
          }),
          catchError((error: any) =>
            of(new heroActions.ActionHeroErrors({ errors: error }))
          )
        )
      )
    )
  );

  updateHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActionTypes.UPDATE_HERO),
      switchMap((action) =>
        this.heroService.updateHero(action.payload.hero).pipe(
          map((response) => {
            console.log('response:::', response);
            return new heroActions.ActionUpdateHeroSuccess({
              hero: action.payload.hero,
            });
          }),
          catchError((error: any) =>
            of(new heroActions.ActionHeroErrors({ errors: error }))
          )
        )
      )
    )
  );

  deleteHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActionTypes.DELETE_HERO),
      switchMap((action) =>
        this.heroService.deleteHero(action.payload.id).pipe(
          map((response) => {
            console.log('response:::', response);
            return new heroActions.ActionDeleteHeroSuccess({
              id: action.payload.id,
            });
          }),
          catchError((error: any) =>
            of(new heroActions.ActionHeroErrors({ errors: error }))
          )
        )
      )
    )
  );
}
