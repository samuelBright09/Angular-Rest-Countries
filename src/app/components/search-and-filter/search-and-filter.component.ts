import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { CountriesService } from '../../services/countries.service';
import { Store } from '@ngrx/store';
import { selectSelectedRegion, selectRegions } from '../../store/countries/country.selector';
import { searchCountry } from '../../store/search/search.actions';
import { setSelectedRegion, loadRegions } from '../../store/countries/country.actions';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-search-and-filter',
  imports: [FormsModule, AsyncPipe, NgFor],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.scss',
})
export class SearchAndFilterComponent implements OnInit, OnDestroy {
  selectedRegion: string = '';
  private destroy$ = new Subject<void>();
  private inputSubject = new Subject<string>();

  private countryService = inject(CountriesService);
  private store = inject(Store);
  regions$ = this.store.select(selectRegions);

  ngOnInit(): void {
    // Load regions when component initializes
    this.store.dispatch(loadRegions());
    
    this.store
      .select(selectSelectedRegion)
      .pipe(takeUntil(this.destroy$))
      .subscribe((region) => {
        this.selectedRegion = region || '';
      });

    this.inputSubject
      .pipe(debounceTime(700), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe((query) => {
        this.store.dispatch(searchCountry({ query }));
      });
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputSubject.next(input.value);
  }

  onChange(region: string): void {
    this.store.dispatch(setSelectedRegion({ region }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
