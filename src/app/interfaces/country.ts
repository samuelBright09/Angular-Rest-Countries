export interface Country {
    flags:      Flags;
    name:       Name;
    capital:    string[];
    region:     Region;
    population: number;
    cca3:       string;
    subregion:  string;
    tld:          string[];
    borders:   string[];
    currencies: Currencies;
    languages: Languages;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}

export interface Languages {
    [key: string]: string;
  }; 

  export interface Currencies {
    [key: string]: CurrencyInfo;
  }


  export interface CurrencyInfo {
            name: string;
            symbol: string;
  }
  
export type Region = "Africa" | "Asia" | "Oceania" | "Europe" | "Americas" | "Antarctic";



export interface CountryState {
  country?: Country;
  countries: Country[];
  selectedRegion: string;
  filteredCountries?: Country[];
  regions?: string[];
  loading: boolean;
}