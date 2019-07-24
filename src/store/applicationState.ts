import { combineReducers, Reducer } from 'redux';
import { ThemeState, themesReducer } from './theme';

// The top-level state object
export interface ApplicationState {
  themeState: ThemeState;
}

export const rootReducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  themeState: themesReducer,
});
