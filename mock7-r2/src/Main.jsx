import axios from 'axios';
import { nanoid } from 'nanoid';
import React,{useState,useEffect} from 'react';
import { SingleCard } from './Components/SingleCard';
import styles from './Styles/Main.module.css';

export const Main = () => {
    const [alldata,setAllData]= useState([]);
    const [isLoading,setIsLoading]= useState(false);

    let api="https://restcountries.com/v3.1/all";
    const fetchData=(api)=>{
        setIsLoading(true)
        fetch(api)
        .then(res=>res.json()).then(res=>{
             setIsLoading(false)
             console.log(res);
            setAllData(res)
        })
    }

    const getRegion=(val)=>{
      console.log(val);
      const regionapi=`https://restcountries.com/v3.1/region/${val}`;
      fetch(regionapi)
      .then(res=>res.json()).then(res=>{
          
          setAllData(res)
      })
 }


     const handleSort=(val)=>{

          if(val=='l2h'){
            let sortData= alldata.sort((a,b)=>{
              return a.population- b.population;
              
            })
            console.log(sortData)
            setAllData([...sortData])
          }
          else if(val=='h2l'){
            let sortData= alldata.sort((a,b)=>{
              return b.population- a.population;
            })
            console.log(sortData)
            setAllData([...sortData])
          }
     }

   


    useEffect(()=>{
        fetchData(api)

    },[])
    // console.log(alldata[0]);


    if(!isLoading)
  return (
    <>
    <div className={styles.filterdiv}>
     <select id="sort-pop" 
    //  onClick={(e)=>handleSort(e.target.value)}
    onChange={(e)=>handleSort(e.target.value)}
     >
        <option value="none">None</option>
        <option value="l2h">Ascending</option>
        <option value="h2l">Descending</option>
     </select>
     <div>
      <input type="text" id='region' onChange={(e)=>getRegion(e.target.value)} />
        {/* <select id="region" className="filter-reg" 
        onChange={(e)=>handleFilter(e.target.value)}
        >
        <option value="none">Filter by Region </option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Central America">Central America</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
        </select> */}
     </div>
    </div>
    
    <div className={styles.cont} >
          {     
              
             alldata?.map(item=>{
                return <SingleCard item={item} id={nanoid()} key={nanoid()} />
            })
            
          }
    </div>
    </>
  )
        
}
