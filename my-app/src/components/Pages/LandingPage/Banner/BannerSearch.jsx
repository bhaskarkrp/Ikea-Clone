import React, { useState } from "react";
import styles from "./BannerSearch.module.css";
import SearchIcon from "@material-ui/icons/Search";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
export const BannerSearch = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.accordion}>
      <div
        className={
          active ? styles.showaccordionContent : styles.accordionContent
        }
      >
        <div className={styles.container}></div>
        <div className={styles.BannerSearch}>
              <div className={styles.InputField}>
                <SearchIcon />
                <input placeholder="Find online store" type="search"></input>
              </div>
            </div>
      </div>

      <div
        className={styles.accordionHeading}
        onClick={() => {
          setActive(!active);
        }}
      >
        <div style={{boxSizing:"border-box"}}>
          
            Online store:
            <strong>
              ikea.com {!active ? <ExpandLessIcon style={{position:"relative",top:"6px"}} /> : <ExpandMoreIcon style={{position:"relative",top:"6px"}}/>}
            </strong>
          
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;
