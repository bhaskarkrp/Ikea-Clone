import React from 'react'
import styles from './SmallCard.module.css'
import pic1 from '../../Images/Smallimg1.jpg'
import pic2 from '../../Images/Smallimg2.jpg'

import { HiOutlineArrowRight } from 'react-icons/hi';


const SmallCard = () => {
  return (
    <>
     <div className={styles.cards}>

    <div className={styles.card}>

   
  <img src={pic1}alt="img"  className={styles.card_img}/>

  <h1  className={styles.heading} > <b>Become an IKEA supplier  </b></h1>
   <p className={styles.para} >
   At IKEA, our aim is to always offer sustainable, high-quality products and an affordable price. But we can’t do it alone. We are always looking for new suppliers to join us. Are you a current or aspiring supplier?
   </p>

   <a href="/" className={styles.lin}> 
    
   Learn more about working with us &nbsp; < HiOutlineArrowRight fontSize={'25px'}/>

   </a>

  

</div>
{/* Second Card */}

<div className={styles.card}>

   
<img src={pic2}alt="img"  className={styles.card_img}/>

<h1  className={styles.heading} > <b>Join us!  </b></h1>
 <p className={styles.para} >
 Behind every IKEA product you’ll find down-to-earth, straight-forward people working for and with the many people. Together, we will create a better everyday life for ourselves and our customers.
 </p>

 <a href="/" className={styles.lin}> 
  
 The 8 key values that form the IKEA culture &nbsp; < HiOutlineArrowRight fontSize={'25px'}/>
 
 </a>

 <button className={styles.btn} >Available Jobs &nbsp; < HiOutlineArrowRight fontSize={'25px'}/></button>
  
</div>

 
</div>
     



    </>
  )
}

export default SmallCard