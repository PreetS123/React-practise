import React,{useState} from 'react';
import {Link } from 'react-router-dom';
import styles from '../Styles/SingleCard.module.css';

export const SingleCard = ({item,id}) => {
  // const navigate= useNavigate();
  const [modal,setModal]= useState(false);
  
  
  const saveItem=(el)=>{
    localStorage.setItem('countryname',JSON.stringify(el))
    // navigate('/name/cname')
  }
  
  return (
    <>
       <div className={styles.scard}>
        <div className={styles.flagdiv}>
            <img src={item.flags.png} alt='FLAG' />
        </div>
        <div className={styles.infodiv}>
            <div>
                <div>
                    <h3>{item.name.common}</h3>
                </div>
                
                  <h3>Population: {' '}<span>({item.population})</span> </h3>
                  <h3>Region: {' '} <span>{item.region}</span></h3>
                  <h3>Capital: {' '}<span>{item.capital}</span> </h3>
                 <Link to={`/name/${item.name.common}`}> <button onClick={()=>saveItem(item.name.common)}>Show Details</button></Link>
            </div>
            <div>
              <button>Open</button>
            </div>
        </div>
       </div>
    </>
  )
}
