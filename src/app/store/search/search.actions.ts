import { createAction, props } from '@ngrx/store';

export const searchCountry = createAction(
  '[Search] Search Country',
  props<{ query: string }>()
);