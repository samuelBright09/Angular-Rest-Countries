import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError, map } from 'rxjs';
import { Country } from '../interfaces/country';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private BASE_URL = environment.apiUrl;
  private http = inject(HttpClient)

   getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}/all?fields=name,flags,population,capital,region,cca3,borders`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getRegions(): Observable<string[]> {
    return this.getCountries().pipe(
      map(countries => {
        const regions = countries
          .map(country => country.region)
          .filter((region, index, arr) => region && arr.indexOf(region) === index)
          .sort();
        return regions;
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.BASE_URL}/alpha/${code}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getCountryList(list: string[]): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}/alpha?codes=${list.join(',')}`).pipe(
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}

