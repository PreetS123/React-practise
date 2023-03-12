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
             isError:''
         }
         case types.GET_USER_FAILURE:
            return  {
                 ...state,
                 isError:payload,
                 isLoading:false,
             }

             case types.DELETE_USER_SUCCESS:
             case types.ADD_USER_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    isError:'',
                }

       default: return state
    }
}