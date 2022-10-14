import * as types from './ActionTypes';


const initState={
    shoes:[],
    count:Number(JSON.parse(localStorage.getItem('counter'))),
    isLoading:false,
    isError:false,
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.GET_SHOES_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case types.GET_SHOES_SUCCESS:{
            return {
                ...state,
                shoes:payload,
                isLoading:false,
                isError:false,
            }
        }
        case types.GET_SHOES_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        case types.UPDATE_COUNTER:{
            const value=state.count+payload;
            console.log(value,'update')
            JSON.stringify(localStorage.setItem('counter',value));
            return {
                ...state,
                count:value,
                isLoading:false,
                isError:false,
            }
        }
        case types.REDUCE_COUNTER:{
            const value=state.count-payload;
            console.log(value,'reduce')
            JSON.stringify(localStorage.setItem('counter',value));
            return {
                ...state,
                count:value,
                isLoading:false,
                isError:false,
            }
        }
        default:
            return state;
    }
}