

    import  { legacy_createStore,
        combineReducers,
        compose,
        applyMiddleware } from 'redux';
      import thunk from 'redux-thunk';
      import {bookReducer} from './Reducer';
    
    
      
      const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    
        }): compose;
    
        const rootReducer = combineReducers({
            bookReducer
        });
        
        export const store = legacy_createStore(
            rootReducer,
            composeEnhancers(applyMiddleware(thunk))
        )