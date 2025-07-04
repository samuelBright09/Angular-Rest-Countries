import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryState } from '../../interfaces/country';
import { selectSearchQuery } from '../search/search.selector';

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

export const selectSelectedRegion = createSelector(
  selectCountriesState,
  (state) => state.selectedRegion
);

export const selectRegions = createSelector(
  selectCountriesState,
  (state) => state.regions || []
);

export const selectFilteredCountries = createSelector(
  selectCountriesState,
  selectSelectedRegion,
  selectSearchQuery,
  (state: CountryState, selectedRegion: string, searchQuery: string) => {
    let filteredCountries = state.countries;
    if (selectedRegion) {
      filteredCountries = filteredCountries.filter(
        (country) => country.region === selectedRegion
      );
    }
    if (searchQuery) {
      filteredCountries = filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filteredCountries;
  }
);
