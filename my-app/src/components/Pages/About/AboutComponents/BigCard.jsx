import React from 'react'
import styles from './BigCard.module.css'
// import pic from '../../Images/Bigimg1.jpg'

const BigCard = (props) => {
  return (
   <>
     <div className={styles.cards}>

      <div className={styles.card}>

        <h1  className={styles.heading} > <b> {props.title} </b></h1>
        <img src={props.imgsrc} alt="img"  className={styles.card_img}/>
         <p className={styles.para} >
            {props.para}
         </p>
         <a href="/" className={styles.lin}> 
         
       {props.links}
         </a>

         <a href="/" className={styles.lastlink} > {props.lastlink} </a>

      </div>
       
     
       
           
       
     </div>

    
       
   </>
  )
}

export default BigCard