   
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

   const userAdded=(user)=>({
    type:types.ADD_USER,
    payload:user,
   })
   
   export const addUser=(user)=>{
       return function (dispatch){
        axios.post(`http://localhost:8080/user`,user)
        .then(res=>{
            console.log(res);
            dispatch(userAdded())
            dispatch(loadUsers())
        })
        .catch(er=>console.log(er))
       }
   }

   const userSingle=(user)=>({
    type:types.GET_SINGLE_USER,
    payload:user,
   })
   
   export const getSingleUser=(id)=>{
       return function (dispatch){
        axios.get(`http://localhost:8080/user/${id}`)
        .then(res=>{
            console.log(res.data);
            dispatch(userSingle(res.data))
            // dispatch(loadUsers())
        })
        .catch(er=>console.log(er))
       }
   }


   const userUpdate=()=>({
    type:types.UPDATE_USER,
   })

   export const updateUser=(user,id)=>{
    return function (dispatch){
     axios.put(`http://localhost:8080/user/${id}`,user)
     .then(res=>{
         console.log(res.data);
         dispatch(userUpdate())
         dispatch(loadUsers())
     })
     .catch(er=>console.log(er))
    }
}