import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private BASE_URL = 'https://restcountries.com/v3.1';
  private http = inject(HttpClient)

   getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}/all?fields=name,flags`).pipe(
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

