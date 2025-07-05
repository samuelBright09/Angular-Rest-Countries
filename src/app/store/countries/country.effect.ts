import { inject, Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";
import { CountriesService } from "../../services/countries.service";
import { loadCountries, loadCountriesSuccess, loadCountry, loadCountrySuccess, loadRegions, loadRegionsSuccess } from "./country.actions";

@Injectable()
export class CountryEffects {
  private actions$ = inject(Actions);
  private countryService = inject(CountriesService);
  private route = inject(ActivatedRoute);

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountries),
      switchMap(() =>
        this.countryService.getCountries().pipe(
          map((countries) => loadCountriesSuccess({ countries })),
          catchError((error) => {
            console.error('Error loading countries:', error);
            return [];
          })
        )
      )
    )
  );

  loadRegions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRegions),
      switchMap(() =>
        this.countryService.getRegions().pipe(
          map((regions) => loadRegionsSuccess({ regions })),
          catchError((error) => {
            console.error('Error loading regions:', error);
            return [];
          })
        )
      )
    )
  );

  loadCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountry),
      switchMap((action) =>
        this.countryService.getCountryByCode(action.code).pipe(
          map((country) => loadCountrySuccess({ country })),
          catchError((error) => {
            console.error('Error loading countries:', error);
            return [];
          })
        )
      )
    )
  );
}