import {legacy_createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {rootReducer} from './Redux/root-reducer';
import reduxThunk from 'redux-thunk';


const middlewares=[reduxThunk];

if(process.env.NODE_ENV==='development'){
    middlewares.push(logger);
}


export const store= legacy_createStore(rootReducer,applyMiddleware(...middlewares));