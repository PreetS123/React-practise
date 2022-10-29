import React from 'react';
// import { useEffect ,useState} from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = (items) => {
 const {image,brand,category,price,title}=items.item;
//  const [cartData,setCartData]=useState([])

  const postCart=(value)=>{   
      fetch("http://localhost:8080/cart",{
        method:'POST',
        body:JSON.stringify(value),
        headers:{
          'content-type':'application/json'
        }
      }).then(r=>r.json())
      
  }
   

  const handleClick=(value)=>{
   
  postCart({...value,qty:1})
    
  }

  return (
    <div className={styles.oneCard}>
        <div >
         <img className={styles.image} src={image} alt='product unavailable' />
         </div>
         <div className={styles.itemdiv}>
         <p>{brand}</p>
         <p>{category}</p>
         <p>{price}</p>
         <p>{title}</p>
         </div>
         <div className={styles.cartdiv}>
          <button className={styles.cartbtn} onClick={()=>handleClick(items.item)} >Add to Bag</button>
         </div>
    </div>
  )
}




