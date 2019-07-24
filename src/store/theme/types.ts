import {colors, secondaryColors} from '../../theme/theme'
export type ApiResponse = Record<string, any>

export interface Theme extends ApiResponse {
    breakpoints: string[];
    fontSizes: string[];
    space: string[];
    colors: { [key in keyof typeof colors]: string };
    secondaryColors: { [key in keyof typeof secondaryColors]: string };
}



export  enum ThemeActionTypes {
    FETCH_REQUEST = '@@heroes/FETCH_REQUEST',
    FETCH_SUCCESS = '@@heroes/FETCH_SUCCESS',
    FETCH_ERROR = '@@heroes/FETCH_ERROR',
}


export interface ThemeState {
    readonly loading: boolean
    readonly data: Theme | {}
    readonly errors: string | null
}