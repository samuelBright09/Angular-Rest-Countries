import { Component, inject, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Store } from '@ngrx/store';
import { selectCountries, selectFilteredCountries, selectLoading } from '../../store/countries/country.selector';
import { loadCountries } from '../../store/countries/country.actions';
import { AsyncPipe } from '@angular/common';
import { CountryCardComponent } from '../country-card/country-card.component';
import { Observable } from 'rxjs';
import { selectTheme } from '../../store/theme/theme.selector';
import { SearchAndFilterComponent } from "../search-and-filter/search-and-filter.component";

@Component({
  selector: 'app-country-list',
  imports: [AsyncPipe, CountryCardComponent, SearchAndFilterComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent implements OnInit {
  private themeToggle$!: Observable<boolean>;
  private store = inject(Store);
 

  
  countries$ = this.store.select(selectFilteredCountries);
  loading$ = this.store.select(selectLoading);
  
  
  ngOnInit() {
    this.themeToggle$ = this.store.select(selectTheme);
    this.store.dispatch(loadCountries());
  }
}
