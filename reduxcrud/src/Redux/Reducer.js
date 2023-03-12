import * as types from './actionTypes';


const initState={
    users:[],
    isLoading:true,
    isError:'',
    user:{}
}

export const usersReducers=(state=initState,{type,payload})=>{
    switch(type){
       case types.GET_USER_SUCCESS:
        return  {
             ...state,
             users:payload,
             isLoading:false,
         }
         case types.GET_USER_FAILURE:
            return  {
                 ...state,
                 isError:payload,
                 isLoading:false,
             }

       default: return state
    }
}