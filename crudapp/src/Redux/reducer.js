import * as types from './actionTypes';

  const initState={
    users:[],
    user:{},
    isloading:true
  }

  export const userReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.GET_USER:{
            return {
                ...state,
                users:payload,
                isloading:false,
            }
        }
        case types.DELETE_USER:{
            return {
                ...state,
                isloading:false,
            }
        }

        default:
            return state;
    }
  }