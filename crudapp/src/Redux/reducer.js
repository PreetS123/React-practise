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
        case types.ADD_USER:{
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
        case types.GET_SINGLE_USER:{
          return {
              ...state,
              user:payload,
              isloading:false,
          }
      }
      case types.UPDATE_USER:{
        return {
            ...state,
            users:payload,
            isloading:false,
        }
    }

        default:
            return state;
    }
  }