import React from 'react'
import styles from './BigCardLink.module.css'
import { HiOutlineArrowRight } from 'react-icons/hi';
// &nbsp; < HiOutlineArrowRight fontSize={'25px'}/>
const BigCardLink = () => {
  return (
    <>
    <div className={styles.container}>

    <a href="/" className={styles.link} > See the latest news  &nbsp; < HiOutlineArrowRight fontSize={'25px'}/></a>
    </div>
      
    </>
  )
}

export default BigCardLink