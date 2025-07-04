import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "../../interfaces/search";

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectSearchQuery = createSelector(
  selectSearchState,
  (state: SearchState) => state.searchValue
);