   
   import * as types from './actionTypes';
   import axios from 'axios';

   const getUsers=(users)=>({
    type:types.GET_USER,
    payload:users
   })
   
   export const loadUsers=()=>{
       return function (dispatch){
        axios.get(`http://localhost:8080/user`)
        .then(res=>{
            console.log(res.data);
            dispatch(getUsers(res.data))
        })
        .catch(er=>console.log(er))
       }
   }


   const userDeleted=()=>({
    type:types.DELETE_USER,
   })
   
   export const deleteUser=(id)=>{
       return function (dispatch){
        axios.delete(`http://localhost:8080/user/${id}`)
        .then(res=>{
            console.log(res);
            dispatch(userDeleted())
            dispatch(loadUsers())
        })
        .catch(er=>console.log(er))
       }
   }