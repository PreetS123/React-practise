import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

export const CartComponent = () => {
  const [cartData, setCartData] = useState([]);
  const [count,setCount]= useState(0)
  
  const fetchCart = () => {
    fetch(`http://localhost:8080/cart`)
      .then((r) => r.json())
      .then((r) => setCartData(r))
      .catch((e) => console.log(e));
  };

  
  useEffect(() => {
    fetchCart();
  }, []);
  console.log(cartData);

  const handleInc=(item)=>{
   item.qty=Number(item.qty)+1;
   console.log(item.qty)
  //  cartData.find(item=>item.id===id && item.qty+1)
  }
  const handleDec=(item)=>{
    if(item.qty>1){
    item.qty=Number(item.qty)-1;
    console.log(item.qty)
    }
   }

  return (
    <div className={styles.cartPageDiv}>
      <div className={styles.cartDiv}>
        {cartData.map((item) => {
          return (
            <div key={nanoid()} className={styles.onecart}>
              <img
                className={styles.cartimg}
                src={item.image}
                alt={item.title}
              />
              <p>{item.brand}</p>
              {/* <p>{item.category}</p> */}
              <p>{item.price}</p>
              {/* <p>{item.title}</p> */}
              <div className={styles.countbtn}>
                <button onClick={()=>handleInc(item)}>+</button>
                <h4>{item.qty}</h4>
                <button onClick={()=>handleDec(item)}>-</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.summary}>
        <h1>Order Summary</h1>
      </div>
    </div>
  );
};
