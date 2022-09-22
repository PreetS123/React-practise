
 import * as types from './ActionTypes';

 export const getShoesRequest=()=>({
    type: types.GET_SHOES_REQUEST,
 })

 
 export const getShoesSuccess=(payload)=>({
    type: types.GET_SHOES_SUCCESS,
    payload,
 })

 
 export const getShoesFailure=()=>({
    type: types.GET_SHOES_FAILURE,
 })