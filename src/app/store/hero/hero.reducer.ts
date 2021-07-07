import { Hero } from '../../models';
import { HeroActions, HeroActionTypes } from './hero.actions';
import { Action } from '@ngrx/store';
import { getInitialState } from '../utils';

export interface HeroState {
  // items that have been loaded so far to support selecting an item from cache
  // this require intensive checking of item id, and thus could be omitted for now
  items: Hero[];
  // selected item when viewing detail pages
  selected?: Hero;
  // filtered items reflected by filters in the query param, used on listing views
  filteredItems: Hero[];
  // for pagination in listing views
  filteredItemsCount: number;
  // if any of these is loading
  loading: boolean;
  // if any of these has errors
  errors: string[];
  // a number indicates the progress of API calls
  progress?: number;
}

const initialState = getInitialState<Hero>();

export const heroReducer = (state = initialState, incomingAction: Action) => {
  const action = incomingAction as HeroActions;
  switch (action.type) {
    // Get Heroes
    case HeroActionTypes.GET_HEROES: {
      console.log('action dispatched:::', 'GET_HEROES');
      return {
        ...state,
        loading: true,
      };
    }

    case HeroActionTypes.GET_HEROES_SUCCESS: {
      console.log('action dispatched:::', 'GET_HEROES_SUCCESS');
      return {
        ...state,
        filteredItems: action.payload.heroes,
      };
    }

    case HeroActionTypes.ADD_HERO: {
      const newHero = action.payload.hero;
      const newHeroes = [...state.items];
      newHeroes.push(newHero);
      return {
        ...state,
        filteredItems: newHeroes,
      };
    }

    case HeroActionTypes.UPDATE_HERO: {
      const newHero = action.payload;
      const newHeroes = [...state.filteredItems];
      newHeroes[action.payload.hero.id] = action.payload.hero;
      return {
        ...state,
      };
    }

    case HeroActionTypes.DELETE_HERO: {
      const id = action.payload.id;
      return {
        ...state,
        filteredItems: state.filteredItems.filter((hero) => hero.id !== id),
      };
    }

    default:
      return state;
  }
};
