import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { toggleTheme } from '../store/theme/theme.actions';
import { selectTheme } from '../store/theme/theme.selector';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private store = inject(Store);

  constructor() {
    this.initializeTheme();
  }

  /**
   * Initialize theme from localStorage or default to light mode
   */
  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Apply initial theme to DOM
    this.applyTheme(isDarkMode);
    
    // If the saved theme is different from the initial state, dispatch the action
    if (isDarkMode) {
      this.store.dispatch(toggleTheme());
    }
  }

  /**
   * Get current theme state as observable
   */
  getThemeState(): Observable<boolean> {
    return this.store.select(selectTheme);
  }

  /**
   * Toggle theme between light and dark mode
   */
  toggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }

  /**
   * Apply theme to document body
   */
  private applyTheme(isDarkMode: boolean): void {
    const body = document.body;
    
    if (isDarkMode) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
} 