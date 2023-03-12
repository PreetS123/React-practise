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

const addUserRequest=()=>({
    type:types.ADD_USER_REQUEST,
})
const addUserSuccess=(payload)=>({
    type:types.ADD_USER_REQUEST,
    payload
})
const addUserFailure=(payload)=>({
    type:types.ADD_USER_REQUEST,
    payload
})

export const addUserData=(payload)=>dispatch=>{
    dispatch(addUserRequest());
    axios.post(``,payload).then(res=>{
        console.log('addUserData',res);
        dispatch(addUserSuccess(res));
    }).then(er=>{
        dispatch(addUserFailure(er));
    })
}

const deleteUser=(payload)=>({
    type:types.DELETE_USER_SUCCESS,
    payload
})

const editUser=(payload)=>({
    type:types.EDIT_USER_SUCCESS,
    payload,
})