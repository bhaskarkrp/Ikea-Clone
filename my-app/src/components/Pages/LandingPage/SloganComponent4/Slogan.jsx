import React from "react";
import styles from "./Slogan.module.css";
export const Slogan = () => {
  return (
    <div className={styles.SloganContainer}>
      <div className={styles.Slogan}>A world of inspiration for your home</div>
      <img src="https://www.ikea.com/global/en/images/ikea-logo.svg" alt="" />
      <ul className={styles.List}>
          <li className={styles.ListAfterSlogan}> <a href="/">About us</a>  </li>| 
          <li className={styles.ListAfterSlogan}> <a href="/">Life at home</a> </li>|
          <li className={styles.ListAfterSlogan}><a href="/">Sustainability</a>  </li>| 
          <li className={styles.ListAfterSlogan}> <a href="/">Ethics & Integrity</a> </li>|
          <li className={styles.ListAfterSlogan}>  <a href="/">Work with us</a> </li>| 
          <li className={styles.ListAfterSlogan}> <a href="/">Newsroom</a></li>
      </ul>
    </div>
  );
};
