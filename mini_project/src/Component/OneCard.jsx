import React from 'react'
import styles from './OneCard.module.css';

export const OneCard = ({name,avatar,rating,title,salary,company_name}) => {
  return (
    <div className={styles.maindiv}>
         <div className={styles.avatar}>
            <img className={styles.image} src={avatar} alt={name} />
            <p>{name}</p>
         </div>
         <p>{rating}</p>
          <h4>{title}</h4>
          <p>{salary}</p>
          <h5>{company_name}</h5>
    </div>
  )
}
