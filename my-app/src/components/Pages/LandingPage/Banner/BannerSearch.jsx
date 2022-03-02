import React, { useContext, useState } from "react";
import styles from "./BannerSearch.module.css";
import SearchIcon from "@material-ui/icons/Search";
import LandingPageContext from "../ContextLandingPage/ContextLandingPage";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

export const BannerSearch = () => {
  const {searchTransition,setSearchTransition}= useContext(LandingPageContext)
  

  return (
    <div className={styles.Main}>
    
      <div className={searchTransition ? styles.BannerSearchContainer : styles.BannerSearchContainer2 }  >
      <div className={styles.SearchLine}>
      <div className={styles.GoShoppingContainer}>
          <span className={styles.GoShopping}>Go shopping</span>{" "}
          <span className={styles.ArrowIcon}>
            {" "}
            <ArrowForwardIcon style={{ fontSize: "45px" }} />{" "}
          </span>
        </div>
      <div className={styles.BannerSearch}>
          <div className={styles.InputField}>
            <SearchIcon />
            <input placeholder="Find online store" type="search"></input>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  );
};
