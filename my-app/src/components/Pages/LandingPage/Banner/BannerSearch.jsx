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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae culpa non
        modi voluptate alias ipsum nesciunt error debitis quos maxime ullam
        earum quasi pariatur, nemo tenetur eos ratione quibusdam quo!
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
