import * as types from './actionTypes';
import axios from 'axios';

const getUserRequest=()=>({
    type:types.GET_USER_REQUEST,
})
const getUserSuccess=(payload)=>({
    type:types.GET_USER_SUCCESS,
    payload
})
const getUserFailure=(payload)=>({
    type:types.GET_USER_FAILURE,
    payload
})

export const loadUserData=()=>(dispatch)=>{
   dispatch(getUserRequest());
   axios.get(`${process.env.REACT_APP_API}`).then((res)=>{
       console.log('getUserData',res)
       dispatch(getUserSuccess(res.data));
   }).then(er=>{
    console.log('getUserDataerror',er);
    dispatch(getUserFailure(er));
   })
}


const addUserSuccess=()=>({
    type:types.ADD_USER_REQUEST

})


export const addUserData=(payload)=>dispatch=>{
    axios.post(`${process.env.REACT_APP_API}`,payload).then(res=>{
        console.log('addUserData',res);
        dispatch(addUserSuccess());
        dispatch(loadUserData());
    }).catch(er=>{
        console.log(er);
    })
}

const deleteUserSuccess=()=>({
    type:types.DELETE_USER_SUCCESS,
})

 export const deleteUserData=(id)=>dispatch=>{
    axios.delete(`${process.env.REACT_APP_API}/${id}`).then(res=>{
        dispatch(deleteUserSuccess());
        dispatch(loadUserData());
    }).catch(er=>console.log('deleteUserData',er))
 }

const singleUser=(payload)=>({
    type:types.GET_SINGLE_USER,
    payload,
})

export const getSingleUserData=(id)=>(dispatch)=>{
      axios.get(`${process.env.REACT_APP_API}/${id}`).then(res=>{
        dispatch(singleUser(res.data))
      }).catch(er=>console.log(er))
}