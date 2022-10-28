import React from 'react';
import styles from './ProductCard.module.css';

export const ProductCard = (items) => {
 const {id,image,brand,category,price,title}=items.item
//  console.log('item',items.item)
  const postCart=(value)=>{

      fetch("http://localhost:8080/cart",{
        method:'POST',
        body:JSON.stringify(value),
        headers:{
          'content-type':'application/json'
        }
      }).then(r=>r.json())
      .then(r=>console.log(r))
  }

  const handleClick=(value)=>{
    postCart(value)
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
          {/* <div className={styles.itemcount} >
            <button>+</button>
            <h1></h1>
            <button>-</button>
          </div> */}
         </div>
    </div>
  )
}




