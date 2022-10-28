import React from 'react';
// import styled from 'styled-components';
import styles from './ProductCard.module.css';

export const ProductCard = ({image,brand,category,price,title}) => {
  
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
          <button className={styles.cartbtn}>Add to Bag</button>
          <div className={styles.itemcount} >
            <button>+</button>
            <h1></h1>
            <button>-</button>
          </div>
         </div>
    </div>
  )
}




