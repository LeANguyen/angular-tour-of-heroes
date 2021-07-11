import { createSelector, createFeatureSelector } from '@ngrx/store';
import { HeroState } from './hero.reducer';

// createFeatureSelector Method#1
export interface AppState {
  hero: HeroState;
}
export const selectFeature = (state: AppState) => state.hero;

// createFeatureSelector Method#2
const heroStateFeatureKey = 'heroState';
// export const selectFeature =
//   createFeatureSelector<HeroState>(heroStateFeatureKey);

// createSelector
export const selectHeroes = createSelector(
  selectFeature,
  (state) => state.filteredItems
);

export const selectLoading = createSelector(
  selectFeature,
  (state) => state.loading
);

export const selectHero = createSelector(
  selectFeature,
  (state) => state.selected
);

export const selectErrors = createSelector(
  selectFeature,
  (state) => state.errors
);
