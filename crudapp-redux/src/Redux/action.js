     import * as types from './actiontypes';
     import axios from 'axios';


            const getUser=(payload)=>({
                  type:types.GET_USER_DATA,
                  payload,
            })
           
            export const getUserData=()=>(dispatch)=>{
                 axios.get('https://bookauthor-crudapp.herokuapp.com/crudapp')
                 .then(res=>dispatch(getUser(res.data)))
                 .catch(e=>console.log(e))
            }