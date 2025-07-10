import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';
import { selectCountry, selectLoading } from '../../store/countries/country.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import { loadCountry } from '../../store/countries/country.actions';
import { searchCountry } from '../../store/search/search.actions';

@Component({
  selector: 'app-country-details',
  imports: [RouterLink, AsyncPipe, CommonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
})
export class CountryDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store);

  code!: string;
  country$: Observable<Country | undefined> = this.store.select(selectCountry);
  loading$ = this.store.select(selectLoading);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.code = params.get('code') || '';
      if (this.code) {
        this.store.dispatch(loadCountry({ code: this.code }));
      } else {
        this.router.navigate(['']);
      }
    });
  }

  showBorderCountryDetails(country: string): void {
    this.router.navigate(['countries', country]);
  }
}
