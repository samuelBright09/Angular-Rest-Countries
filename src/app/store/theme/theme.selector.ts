import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ThemeState } from "../../interfaces/theme";

export const selectThemeState = createFeatureSelector<ThemeState>('themeToggle');

export const selectTheme = createSelector(
  selectThemeState,
  (state: ThemeState) => state.isDarkMode
);