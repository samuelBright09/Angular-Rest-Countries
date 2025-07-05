import { createAction, props } from '@ngrx/store';
import { Country } from '../../interfaces/country';

export const loadCountries = createAction('[Countries API] Load Countries');

export const loadRegions = createAction('[Countries API] Load Regions');

export const loadRegionsSuccess = createAction(
  '[Countries API] Load Regions Success',
  props<{ regions: string[] }>()
);

export const loadFilterCountries = createAction(
  '[Countries API] Filter Countries',
  props<{ countries: Country[] }>()
);

export const loadCountriesSuccess = createAction(
  '[Countries API] Load Countries Success',
  props<{ countries: Country[] }>()
);

export const loadCountrySuccess = createAction(
  '[Countries API] Load Country Success',
  props<{ country: Country }>()
);

export const loadCountry = createAction(
  '[Countries API] Load Country',
  props<{ code: string }>()
);


export const setSelectedRegion = createAction(
  '[Country] Set Region Filter',
  props<{ region: string }>()
);
