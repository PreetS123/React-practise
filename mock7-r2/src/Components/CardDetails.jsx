import React, { useState,useEffect } from 'react'
// import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export const CardDetails = () => {
  // const {name}= useParams();
  // console.log(name)
  const [onedata,setOneData]= useState([]);
  
  let cname=JSON.parse(localStorage.getItem('countryname'));
  // cname=cname.toLowerCase();

  const fetchData=()=>{
    fetch(`https://restcountries.com/v3.1/name/${cname}`)
    .then(res=>res.json()).then(res=>{      
        setOneData(res)
    })
}
   useEffect(()=>{
       fetchData();
   },[])

   console.log('one',onedata)

  return (
    <OneCardWrapper>
          <div>
           <h3>{cname}</h3>
          
          <div>
            <h3>Area: {' '}{onedata[0].area}</h3>
            <h3>Capital:{' '}{onedata[0].capital}</h3>
            <h3>Borders: {' '} {onedata[0].borders} </h3>
            <h3>Continets:{' '}{onedata[0].continents[0]}</h3>
            <h3>Population:{' '} {onedata[0].population} </h3>
            <h3>SubRegion: {' '} {onedata[0].subregion}</h3>

          </div>
          </div>
          <div>
            <img src={onedata[0].flags.png} alt={cname} />
          </div>
    </OneCardWrapper>
  )
}



const OneCardWrapper=styled.div`
   width:50%;
   height:fit-content;
   padding:2%;
   display:flex;
   flex-direction:row;
   justify-content:space-around;
   align-items:center;
   font-weight:500;
   font-size:20px;
   color:maroon;

`;