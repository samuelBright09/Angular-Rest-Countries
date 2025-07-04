import { Component, inject, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
})
export class CountryCardComponent {
  @Input() country!: Country;
  private router = inject(Router);

  onClick(code: string): void {
    this.router.navigate(['countries', code]);
  }
}
