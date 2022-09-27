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


   export const AddingHotelRoom=(hotels)=>(dispatch)=>{
    console.log('hotels',hotels)
           axios.post(`https://mock8-r3.herokuapp.com/admin`,hotels)
           .then(res=>{
            console.log('addhotelroom',res)
            dispatch(addHotelRoom())
            dispatch(loadHotelRoom())
           })
           .catch(er=>console.log('addinghotelroom',er))
   }


   const deleteRoom=()=>({
       type:types.DELETE_ROOM_DATA,
   })

   export const deletingHotelRoom=(id)=>dispatch=>{
       axios.delete(`https://mock8-r3.herokuapp.com/admin/${id}`)
       .then(r=>{
              console.log('dltresponce',r)
              dispatch(deleteRoom())
              dispatch(loadHotelRoom())
       })
       .catch(er=>console.log('er in deleting',er))
   }