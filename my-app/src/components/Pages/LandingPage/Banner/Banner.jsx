

import React, { useContext } from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import styles from "./Banner.module.css";
import { BannerSearch } from "./BannerSearch";
import { SvgIconBanner } from "./SvgIconBanner";
import LandingPageContext from "../ContextLandingPage/ContextLandingPage";



export const Banner = () => {

  const {searchTransition,setSearchTransition}= useContext(LandingPageContext)

  return (
    <div className={styles.Banner}>
      <div className={styles.BannerLeftPart}>
        <div className={styles.BannerTitle}>
          <SvgIconBanner />
        </div>
      </div>
      <div className={styles.BannerRightPart}>
        {" "}
        <BannerSearch/>
        <div className={styles.TransitionButton} onClick={()=>{setSearchTransition((prev)=>!prev)}} >Online store: <strong>ikea.in</strong><KeyboardArrowUpIcon/>  </div>
      </div>
    </div>
  );
};
