import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { countryReducer } from './store/countries/country.reducer';
import { themeReducer } from './store/theme/theme.reducer';
import { CountryEffects } from './store/countries/country.effect';
import { ThemeEffects } from './store/theme/theme.effect';
import { SearchReducer } from './store/search/search.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      countries: countryReducer,
      themeToggle: themeReducer,
      search: SearchReducer
    }),
    provideEffects([CountryEffects, ThemeEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
