import { usersReducers } from "./Reducer";
import { combineReducers } from "redux";



export const rootReducer=combineReducers({
    data:usersReducers,
})