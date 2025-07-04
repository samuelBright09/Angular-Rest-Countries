import { Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

export const routes: Routes = [
    {path: "", component: CountryListComponent},
    {path: "countries/:code", component: CountryDetailsComponent},
];
