import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesService } from './services/countries.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  private countrisesService = inject(CountriesService);
constructor() {
  this.showCountries()
}
  showCountries() {
    return this.countrisesService.getCountries();
  }
}
