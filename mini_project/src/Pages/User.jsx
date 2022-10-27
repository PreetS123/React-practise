import axios from 'axios';
import React,{useState,useEffect} from 'react';

export const User = () => {
    const [data,setData]= useState([]);
    
    let api='http://localhost:8080/candidates'

    function fetchData(){
    axios.get(api)
    .then(r=>setData(r.data))
    .catch(e=>console.log(e))
    }

    useEffect(()=>{
        fetchData();
    },[])

    console.log(data);
  return (
    <div>User</div>
  )
}
