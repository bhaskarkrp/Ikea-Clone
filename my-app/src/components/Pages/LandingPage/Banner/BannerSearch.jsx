import React, { useState } from "react";
import styles from "./BannerSearch.module.css";
import SearchIcon from "@material-ui/icons/Search";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const data = [{site:"ikea.in",country:"india"},{site:"ikea.ca",country:"canada"},{site:"ikea.us",country:"usa"},{site:"ikea.uk",country:"uk"},{site:"ikea.ru",country:"russia"},{site:"ikea.ge",country:"germany"},{site:"ikea.pak",country:"pak"},{site:"ikea.sr",country:"srilanka"},{site:"ikea.po",country:"poland"}]
export const BannerSearch = () => {
  const [searchTerms,setSearchTerms]=useState("")
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
            <input onChange={(e)=>{
              setSearchTerms(e.target.value)
            }} placeholder="Find online store" type="search"></input>
          </div>
          <div className={styles.listDiv}>
            <ul>
              {data.filter((val)=>{
                if(searchTerms===""){
                  return val.site
                }else if(val.country.toLowerCase().includes(searchTerms.toLocaleLowerCase())){
                  return val.site
                }
              }).map((element)=>{
                return <li className={styles.siteList} >{element.site}</li> 
              })}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={styles.accordionHeading}
        onClick={() => {
          setActive(!active);
        }}
      >
        <div style={{ boxSizing: "border-box" }}>
          Online store:
          <strong>
            ikea.com{" "}
            {!active ? (
              <ExpandLessIcon style={{ position: "relative", top: "6px" }} />
            ) : (
              <ExpandMoreIcon style={{ position: "relative", top: "6px" }} />
            )}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;
