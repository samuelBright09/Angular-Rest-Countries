export interface Country {
    flags:      Flags;
    name:       Name;
    capital:    string[];
    region:     Region;
    population: number;
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

export type Region = "Africa" | "Asia" | "Oceania" | "Europe" | "Americas" | "Antarctic";



export interface CountryState {
  country?: Country;
  countries: Country[];
  loading: boolean;
}