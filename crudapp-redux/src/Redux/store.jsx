import {
  legacy_createStore,
  combineReducers,
} from "redux";
import { bookReducer } from "./Reducer";



const rootReducer = combineReducers({
  bookReducer,
});

export const store = legacy_createStore(
  rootReducer
);
