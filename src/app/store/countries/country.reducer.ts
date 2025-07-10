import { createReducer, on } from '@ngrx/store';
import { CountryState } from '../../interfaces/country';
import {
  loadCountries,
  loadCountriesSuccess,
  loadCountry,
  loadCountrySuccess,
  loadRegionsSuccess,
  setSelectedRegion,
} from './country.actions';

const initialState: CountryState = {
  countries: [],
  filteredCountries: [],
  loading: false,
  selectedRegion: '',
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountries, (state) => ({ ...state, loading: true })),
  on(loadCountriesSuccess, (state, { countries }) => {
    return {
      ...state,
      countries,
      loading: false,
    };
  }),
  on(loadRegionsSuccess, (state, { regions }) => {
    return {
      ...state,
      regions,
    };
  }),
  on(setSelectedRegion, (state, { region }) => {
    return {
      ...state,
      selectedRegion: region,
    };
  }),
  on(loadCountry, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(loadCountrySuccess, (state, { country }) => {
    return {
      ...state,
      country,
      loading: false,
    };
  })
);
