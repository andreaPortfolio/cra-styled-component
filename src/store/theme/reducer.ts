import { Reducer } from 'redux'
import { ThemeState, ThemeActionTypes } from './types'

export const initialState: ThemeState = {
    data: {},
    errors: null,
    loading: false
};

const reducer: Reducer<ThemeState> = (state = initialState, action) => {
    switch (action.type) {
        case ThemeActionTypes.FETCH_REQUEST: {
            return { ...state }
        }
        case ThemeActionTypes.FETCH_SUCCESS: {
            return { ...state, data: action.payload }
        }
        case ThemeActionTypes.FETCH_ERROR: {
            return { ...state, errors: action.errors }
        }
        default: {
            return state
        }
    }
}


export { reducer as themesReducer }