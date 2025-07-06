import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { toggleTheme } from './theme.actions';

@Injectable()
export class ThemeEffects {
  private actions$ = inject(Actions);

  /**
   * Effect to handle theme changes and apply them to the DOM
   */
  applyTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(toggleTheme),
        tap(() => {
          // Get the current theme state from localStorage or default
          const currentTheme = localStorage.getItem('theme') || 'light';
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          
          // Apply theme to DOM
          const body = document.body;
          if (newTheme === 'dark') {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
          } else {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
          }
          
          // Save to localStorage
          localStorage.setItem('theme', newTheme);
        })
      ),
    { dispatch: false }
  );
} 