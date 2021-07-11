import { Action } from '@ngrx/store';
import { Hero } from 'src/app/models';

export enum HeroActionTypes {
  GET_HERO = '[Hero] Get Hero',
  GET_HERO_SUCCESS = '[Hero] Get Hero Success',
  GET_HEROES = '[Hero] Get Heroes',
  GET_HEROES_SUCCESS = '[Hero] Get Heroes Success',
  SEARCH_HEROES = '[Hero] Search Heroes',
  SEARCH_HEROES_SUCCESS = '[Hero] Search Heroes Success',
  ADD_HERO = '[Hero] Add Hero',
  ADD_HERO_SUCCESS = '[Hero] Add Hero Success',
  UPDATE_HERO = '[Hero] Update Hero',
  UPDATE_HERO_SUCCESS = '[Hero] Update Hero Success',
  DELETE_HERO = '[Hero] Delete Hero',
  DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success',
  ERROR_HERO = '[Hero] Error Hero',
}

// Get Hero
export class ActionGetHero implements Action {
  readonly type = HeroActionTypes.GET_HERO;
  constructor(readonly payload: { id: number }) {}
}

export class ActionGetHeroSuccess implements Action {
  readonly type = HeroActionTypes.GET_HERO_SUCCESS;
  constructor(readonly payload: { hero: Hero }) {}
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

export class ActionSearchHeroesSuccess implements Action {
  readonly type = HeroActionTypes.SEARCH_HEROES_SUCCESS;
  constructor(readonly payload: { heroes: Hero[] }) {}
}

// Add Hero
export class ActionAddHero implements Action {
  readonly type = HeroActionTypes.ADD_HERO;
  constructor(readonly payload: { hero: Hero }) {}
}

export class ActionAddHeroSuccess implements Action {
  readonly type = HeroActionTypes.ADD_HERO_SUCCESS;
  constructor(readonly payload: { hero: Hero }) {}
}

// Delete Hero
export class ActionDeleteHero implements Action {
  readonly type = HeroActionTypes.DELETE_HERO;
  constructor(readonly payload: { id: number }) {}
}

export class ActionDeleteHeroSuccess implements Action {
  readonly type = HeroActionTypes.DELETE_HERO_SUCCESS;
  constructor(readonly payload: { id: number }) {}
}

// Update Hero
export class ActionUpdateHero implements Action {
  readonly type = HeroActionTypes.UPDATE_HERO;
  constructor(readonly payload: { hero: Hero }) {}
}

export class ActionUpdateHeroSuccess implements Action {
  readonly type = HeroActionTypes.UPDATE_HERO_SUCCESS;
  constructor(readonly payload: { hero: Hero }) {}
}

// Error Hero
export class ActionHeroErrors implements Action {
  readonly type = HeroActionTypes.ERROR_HERO;
  constructor(readonly payload: { errors: string[] }) {}
}

export type HeroActions =
  | ActionGetHero
  | ActionGetHeroSuccess
  | ActionGetHeroes
  | ActionGetHeroesSuccess
  | ActionSearchHeroes
  | ActionSearchHeroesSuccess
  | ActionAddHero
  | ActionAddHeroSuccess
  | ActionUpdateHero
  | ActionUpdateHeroSuccess
  | ActionDeleteHero
  | ActionDeleteHeroSuccess
  | ActionHeroErrors;
