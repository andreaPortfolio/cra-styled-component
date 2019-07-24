
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import {ApplicationState, rootReducers} from './applicationState';


export default function configureStore(): Store<ApplicationState> {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({});
    return createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(reduxThunk)),
    );
}
