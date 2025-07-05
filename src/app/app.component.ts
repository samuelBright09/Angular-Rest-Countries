import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryListComponent } from "./components/country-list/country-list.component";
import { HeaderComponent } from "./components/header/header.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
