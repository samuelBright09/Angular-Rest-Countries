import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountryState } from "../../interfaces/country";

export const selectCountriesState =
  createFeatureSelector<CountryState>('countries');

export const selectCountries = createSelector(
  selectCountriesState,
  (state: CountryState) => state.countries
);

export const selectLoading = createSelector(
  selectCountriesState,
  (state: CountryState) => state.loading
);

export const selectCountry = createSelector(
  selectCountriesState,
  (state: CountryState) => state.country
);