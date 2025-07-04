import { createReducer, on } from "@ngrx/store";
import { searchCountry } from "./search.actions";
import { SearchState } from "../../interfaces/search";

const initialState: SearchState = {
    searchValue: '',
  };
  
  export const SearchReducer = createReducer(
    initialState,
    on(searchCountry, (state, {query}) => ({ ...state, searchValue: query }))
  );