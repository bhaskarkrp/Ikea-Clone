import React from 'react'
import styles from './Paragraph.module.css'

import { HiOutlineArrowRight } from 'react-icons/hi';
// < HiOutlineArrowRight fontSize={'25px'}/>
const Paragraph = () => {
  return (
   <>

    <div className={styles.container}>

    <div className={styles.innercontainer}>

   

    <p className={styles.para}>
    Our vision is to create a better everyday life for the many people. On this site you can discover exactly what this means and find out who we are, what we do and what we stand for.

    </p>

         

     <a href="/" className={styles.link}> Explore the IKEA vision  and business idea &nbsp; < HiOutlineArrowRight fontSize={'25px'}/>  </a>

     </div>

    </div>
   

   </>
  )
}

export default Paragraph