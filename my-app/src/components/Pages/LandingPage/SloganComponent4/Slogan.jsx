import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Slogan.module.css";
export const Slogan = () => {
  return (
    <div className={styles.SloganContainer}>
      <div className={styles.Slogan}>A world of inspiration for your home</div>
      <div className={styles.img}>
        <img src="https://www.ikea.com/global/en/images/ikea-logo.svg" alt="" />
      </div>
      <ul className={styles.List}>
        <li className={styles.ListAfterSlogan}> <NavLink to="./about">About us</NavLink>  </li>|
        <li className={styles.ListAfterSlogan}> <a href="/">Life at home</a> </li>|
        <li className={styles.ListAfterSlogan}><a href="/">Sustainability</a>  </li>|
        <li className={styles.ListAfterSlogan}> <a href="/">Ethics & Integrity</a> </li>|
        <li className={styles.ListAfterSlogan}>  <a href="/">Work with us</a> </li>|
        <li className={styles.ListAfterSlogan}> <a href="/">Newsroom</a></li>
      </ul>
    </div>
  );
};
