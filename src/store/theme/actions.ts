import { ThunkDispatch } from 'redux-thunk';
import { ThemeActionTypes, Theme } from './types'
import {ApplicationState}from '../applicationState';
import { Action } from 'redux';


const config = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
};
export const getTheme = () => {
    return async (dispatch: ThunkDispatch<ApplicationState, void, Action>, getState: () => ApplicationState) => {

        try {
            dispatch({
                type: ThemeActionTypes.FETCH_REQUEST,
                loading: true
            }
            );
            const response = await fetch(
                `https://api.myjson.com/bins/ts4s9`,
                config
            );
            const data: Theme = await response.json();
            console.log('CALL', data)
            dispatch({
                type: ThemeActionTypes.FETCH_SUCCESS,
                payload: data,
                loading: false
            });


        } catch (error) {
            dispatch({
                type: ThemeActionTypes.FETCH_ERROR,
                errors: error,
                loading: false}
            );
        }
    };
};