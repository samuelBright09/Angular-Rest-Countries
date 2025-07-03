import { createReducer, on } from "@ngrx/store";
import { CountryState } from "../../interfaces/country";
import { loadCountries, loadCountriesSuccess, loadCountrySuccess } from "./country.actions";




const initialState: CountryState = {
  countries: [],
  loading: false,
  // error: null
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
  // on(loadCountry, (state) => {
  //   return {
  //     ...state,
  //     loading: true,
  //   };
  // }),
  
  on(loadCountrySuccess, (state, { country }) => {
    return {
      ...state,
      country,
      loading: false,
    };
  })
);