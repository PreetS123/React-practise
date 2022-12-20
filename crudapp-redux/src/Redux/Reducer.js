import * as types from './actiontypes';


  const initState={
    books:[],
    book:{},
    isLoading:true
  }

     export const bookReducer=(state=initState,{payload,type})=>{
        switch(type){
            case types.GET_USER_DATA:{
                   return {
                    ...state,
                    books:payload,
                    isLoading:false,
                   }
            }
            default:
            return state
        }
     }