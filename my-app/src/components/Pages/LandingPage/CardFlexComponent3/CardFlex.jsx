
import React from 'react'
import styles from './CardFlex.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { NavLink } from 'react-router-dom';

export const CardFlex = () => {
  return (
    <div className={styles.CardContainer} >
        <div className={styles.Card}>
        <img src="https://www.ikea.com/global/en/images/Festivalfeb_f45af99188.jpg?f=s" alt="" />
            <div className={styles.CardContent}>
                <span> Welcome to IKEA Festival</span> <ArrowForwardIcon style={{fontSize:"medium",position:"relative",right:"18px"}} />
            </div>
            
        </div>
        <div className={styles.Card}>
        <img src="https://www.ikea.com/global/en/images/internationalsales_7dfd8b4ae0.jpg?f=s" alt="" />
            <div className={styles.CardContent}>
            <span>International  Sales</span> <ArrowForwardIcon style={{fontSize:"medium",position:"relative",right:"-30px"}} />
            </div>
        </div>
        <div className={styles.Card}>
        <img src="https://www.ikea.com/global/en/images/museum_1cdda3df28.jpg?f=s" alt="" />
            <div className={styles.CardContent}>
            <span> <NavLink style={{textDecoration:"none",color:"black"}}  to="./about" > About IKEA</NavLink>  </span> <ArrowForwardIcon style={{fontSize:"medium",position:"relative",right:"-110px"}} />
            </div>
        </div>
        <div className={styles.Card}>
        <img src="https://www.ikea.com/global/en/images/internationalsales_7dfd8b4ae0.jpg?f=s" alt="" />
            <div className={styles.CardContent}>
            <span>IKEA Museum </span> <ArrowForwardIcon style={{fontSize:"medium",position:"relative",right:"-80px"}} />
            </div>
        </div>
    </div>
  )
}
