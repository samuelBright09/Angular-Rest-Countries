import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-details',
  imports: [RouterLink],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss'
})
export class CountryDetailsComponent implements OnInit {
private route = inject(ActivatedRoute)
private store = inject(Store);

country$!: Observable<Country | undefined>

ngOnInit(): void {
  
}
}
