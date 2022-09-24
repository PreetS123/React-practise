 import axios from 'axios';
 import * as types from './actiontypes';
   

 const getHotelRoom=(payload)=>({
       type:types.GET_ROOM_DATA,
       payload
 })

 export const loadHotelRoom=()=>(dispatch)=>{
        axios.get(`https://mock8-r3.herokuapp.com/admin`)
        .then(res=>{
            console.log('getdata',res.data);
            dispatch(getHotelRoom(res.data));
        })
        .catch(er=>console.log(er))
 }


   const addHotelRoom=(payload)=>({
    type:types.ADD_ROOM_DATA,
    payload
   })


   export const AddingHotelRoom=(payload)=>(dispatch)=>{
           axios.post(`https://mock8-r3.herokuapp.com/admin`,payload)
           .then(res=>{
            console.log('addhotelroom',res.data)
            dispatch(addHotelRoom())
           })
           .catch(er=>console.log(er))
   }