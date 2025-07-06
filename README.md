# REST Countries API Frontend

A modern, responsive Angular application that displays information about countries using the REST Countries API. Built with Angular 19, NgRx for state management, and features a dark/light theme toggle.

## Project Description

This application provides users with a comprehensive view of world countries, including their flags, population, capital cities, regions, and detailed information. Users can search for countries by name, filter by region, and view detailed information about each country including borders, currencies, and languages.

## Setup & Run Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Angular CLI (version 19)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rest-countries
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```
   NG_APP_API_URL=https://restcountries.com/v3.1
   ```

4. **Run the development server**
   ```bash
   ng serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200` to view the application.

### Build Commands

- **Development build**: `npm run build`
- **Production build**: `npm run build:prod`
- **Staging build**: `npm run build:staging`
- **Analyze bundle**: `npm run analyze`

## Application Features

### Core Functionalities

- **Country List Display**: Shows all countries with flags, names, population, capital, and region
- **Search Functionality**: Real-time search by country name with instant filtering
- **Region Filtering**: Filter countries by continent/region (Africa, Asia, Europe, Americas, Oceania)
- **Country Details**: Detailed view of individual countries including:
  - Official name and common name
  - Flag images (PNG and SVG)
  - Population, capital, region, and subregion
  - Border countries with clickable links
  - Currency information
  - Languages spoken
- **Theme Switching**: Toggle between dark and light modes with persistent state
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Navigation**: Seamless navigation between country list and detail views

## Component Structure

### Main Components

- **`AppComponent`**: Root component that manages the overall layout and theme
- **`HeaderComponent`**: Navigation header with theme toggle functionality
- **`CountryListComponent`**: Main page displaying the grid of countries
- **`CountryCardComponent`**: Individual country card displaying basic country information
- **`CountryDetailsComponent`**: Detailed view of a specific country
- **`SearchAndFilterComponent`**: Search input and region filter dropdown


### Component Roles

- **Layout Components**: Handle overall page structure and navigation
- **Display Components**: Render country data in various formats (cards, details)
- **Interactive Components**: Handle user input (search, filtering, theme toggle)
- **Service Components**: Manage data fetching and state management

## Routing Overview

The application uses Angular Router with the following configured routes:

```typescript
export const routes: Routes = [
    { path: "", component: CountryListComponent },
    { path: "countries/:code", component: CountryDetailsComponent }
];
```

### Route Details

- **`/` (root)**: Displays the main country list page with search and filter functionality
- **`/countries/:code`**: Shows detailed information for a specific country using its 3-letter country code (e.g., `/countries/USA` for United States)

### Navigation Features

- Direct URL access to country details
- Browser back/forward button support
- Programmatic navigation from country cards to detail views
- Breadcrumb-style navigation from detail view back to list

## API Consumption

### REST Countries API Integration

The application consumes the REST Countries API (v3.1) through a dedicated service:

```typescript
export class CountriesService {
  private BASE_URL = environment.apiUrl; // https://restcountries.com/v3.1
}
```

### API Endpoints Used

1. **Get All Countries**: `GET /all?fields=name,flags,population,capital,region,cca3,borders`
   - Fetches all countries with essential fields for the list view
   - Optimized to only retrieve necessary data

2. **Get Country by Code**: `GET /alpha/{code}`
   - Retrieves detailed information for a specific country
   - Used for country detail pages

3. **Get Countries by Codes**: `GET /alpha?codes={codes}`
   - Fetches multiple countries by their 3-letter codes
   - Used for displaying border countries

### Data Management

- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Loading indicators during API calls
- **Caching**: NgRx store caches data to minimize API calls
- **Optimization**: Selective field fetching to reduce payload size

## NgRx Store Implementation

### State Management Architecture

The application uses NgRx for predictable state management with the following store structure:

#### Country State
```typescript
export interface CountryState {
  country?: Country;
  countries: Country[];
  selectedRegion: string;
  filteredCountries?: Country[];
  regions?: string[];
  loading: boolean;
}
```

#### Search State
```typescript
export interface SearchState {
  searchTerm: string;
}
```

#### Theme State
```typescript
export interface ThemeState {
  isDarkMode: boolean;
}
```

### Actions

#### Country Actions
- `loadCountries`: Trigger country list loading
- `loadCountriesSuccess`: Handle successful country data fetch
- `loadCountry`: Load specific country details
- `loadCountrySuccess`: Handle successful country detail fetch
- `setSelectedRegion`: Update region filter
- `loadFilterCountries`: Apply filtering to countries

#### Search Actions
- `updateSearchTerm`: Update search input value

#### Theme Actions
- `toggleTheme`: Switch between light and dark modes

### Reducers

- **Country Reducer**: Manages country data, loading states, and filtering
- **Search Reducer**: Handles search term updates
- **Theme Reducer**: Manages theme state changes

### Effects

- **Country Effects**: Handle side effects for API calls and data processing
- **Search Effects**: Manage search functionality and filtering logic

### Selectors

- **Country Selectors**: Select filtered countries, regions, and individual country data
- **Search Selectors**: Get current search term
- **Theme Selectors**: Get current theme state

## Theme Switching Implementation

### Dark/Light Mode Architecture

The theme switching is implemented using NgRx state management with CSS custom properties:

#### State Management
```typescript
export const toggleTheme = createAction('[Theme] toggle Dark Mode');
```

#### CSS Implementation
- **CSS Custom Properties**: Theme colors defined as CSS variables
- **Dynamic Updates**: Theme changes applied through CSS class toggling
- **Persistent State**: Theme preference stored in NgRx store

#### Component Integration
- **Theme Toggle Component**: Provides user interface for theme switching
- **Global Theme Application**: Theme applied at the app level
- **Icon Changes**: Dynamic sun/moon icons based on current theme


## Git Workflow

### Branching Strategy

The project follows a feature-based branching strategy:

#### Main Branches
- **`main`**: Production-ready code


#### Feature Branches
- **`feat/component-implementation`**: New component development
- **`feat/country-details`**: New functionality
- **`feat/country-service-and-ngrx`**: Bug fixes
- **`feat/ui-dev-and-responsiveness`**: Critical production fixes
 


#### Workflow Process
1. **Feature Development**: Create feature branch from `main`
2. **Code Review**: Pull request to `main` with code review
4. **Integration**: Merge to `main` after approval

#### Commit Convention
- **feat**: New features

## Technologies Used

- **Frontend Framework**: Angular 19
- **State Management**: NgRx (Store, Effects, DevTools)
- **Styling**: SCSS with CSS custom properties
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **Build Tool**: Angular CLI
- **Package Manager**: npm
- **Version Control**: Git

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

