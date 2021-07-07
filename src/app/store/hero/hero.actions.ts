import { Action } from '@ngrx/store';
import { Hero } from 'src/app/models';

export enum HeroActionTypes {
  GET_HERO = '[Hero] Get Hero',
  GET_HEROES = '[Hero] Get Heroes',
  GET_HEROES_SUCCESS = '[Hero] Get Heroes Success',
  SEARCH_HEROES = '[Hero] Search Heroes',
  ADD_HERO = '[Hero] Add Hero',
  UPDATE_HERO = '[Hero] Update Hero',
  DELETE_HERO = '[Hero] Delete Hero',
  ERROR_HERO = '[Hero] Error Hero',
}

// Get Hero
export class ActionGetHero implements Action {
  readonly type = HeroActionTypes.GET_HERO;
  constructor(readonly payload: { id: number }) {}
}

// Get Heroes
export class ActionGetHeroes implements Action {
  readonly type = HeroActionTypes.GET_HEROES;
}

export class ActionGetHeroesSuccess implements Action {
  readonly type = HeroActionTypes.GET_HEROES_SUCCESS;
  constructor(readonly payload: { heroes: Hero[] }) {}
}

// Search Heroes
export class ActionSearchHeroes implements Action {
  readonly type = HeroActionTypes.SEARCH_HEROES;
  constructor(readonly payload: { term: string }) {}
}

// Add Hero
export class ActionAddHero implements Action {
  readonly type = HeroActionTypes.ADD_HERO;
  constructor(readonly payload: { hero: Hero }) {}
}

// Delete Hero
export class ActionDeleteHero implements Action {
  readonly type = HeroActionTypes.DELETE_HERO;
  constructor(readonly payload: { id: number }) {}
}

// Update Hero
export class ActionUpdateHero implements Action {
  readonly type = HeroActionTypes.UPDATE_HERO;
  constructor(readonly payload: { hero: Hero }) {}
}

// Error Hero
export class ActionErrorHero implements Action {
  readonly type = HeroActionTypes.ERROR_HERO;
  constructor(readonly payload: { message: any }) {}
}

export type HeroActions =
  | ActionGetHero
  | ActionGetHeroes
  | ActionGetHeroesSuccess
  | ActionSearchHeroes
  | ActionAddHero
  | ActionUpdateHero
  | ActionDeleteHero
  | ActionErrorHero;
