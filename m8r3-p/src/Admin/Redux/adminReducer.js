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
        default:
            return state;
      }
  }