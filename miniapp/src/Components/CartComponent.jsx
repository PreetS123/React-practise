import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

export const CartComponent = () => {
  const [cartData, setCartData] = useState([]);

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
                <button>+</button>
                <h4></h4>
                <button>-</button>
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
