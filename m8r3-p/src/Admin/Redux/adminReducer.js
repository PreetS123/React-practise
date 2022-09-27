import * as types from './actiontypes';


const initState={
    hotels:[],
    hetel:{},
    isLoading:true,
}

  export const adminReducer=(state=initState,{payload,type})=>{
      switch(type){
        case types.GET_ROOM_DATA:{
            return {
                ...state,
                isLoading:false,
                hotels:payload
            }
        }
        case types.ADD_ROOM_DATA:{
            return {
                ...state,
                isLoading:false,
                hotels:payload
            }
        }
        case types.DELETE_ROOM_DATA:{
            return {
                ...state,
                isLoading:false
            }
        }
        case types.SINGLE_ROOM_DATA:{
            return {
                ...state,
                isLoading:false,
                hotel:payload
            }
        }
        case types.UPDATE_ROOM_DATA:{
            return {
                ...state,
                isLoading:false,
                hotels:payload
            }
        }
        default:
            return state;
      }
  }