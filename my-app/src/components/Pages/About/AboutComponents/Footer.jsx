import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Leftcontainer}>

          <div className={styles.first}>
        
             <a href="/" className={styles.hedTitle1}> About us</a>
             <a href="/"> The history of IKEA</a>
             <a href="/"> The IKEA way of retail</a>
             <a href="/"> Year in review</a>
             <a href="/">The IKEA point of view</a>

          </div>
          <div className={styles.first}>

          <a href="/" className={styles.hedTitle1}>  Life at home</a>
             <a href="/"> Our curiosity box</a>
             <a href="/"> How we work</a>
             <a href="/"> IKEA behind the scenes</a>
             <a href="/"> Co-creation</a>

          </div>
          <div className={styles.first}>
         
          <a href="/" className={styles.hedTitle1}>  Sustainability</a>
             <a href="/">Healthy and sustainable living</a>
             <a href="/">Transforming into a circular business</a>
             <a href="/">Becoming climate positive</a>
             <a href="/">Responsible sourcing</a>
             <a href="/">Fair and equal</a>

          </div>
          <div className={styles.first}>

          <a href="/" className={styles.hedTitle1}>   Work with us</a>
             <a href="/">Work at IKEA</a>
             <a href="/">For suppliers</a>
             
          </div>
          <div className={styles.first}>
          <a href="/" className={styles.hedTitle1}>Newsroom</a>
             <a href="/"> Publications</a>
             <a href="/"> Images and videos</a>
             <a href="/">Spokespersons</a>
             <a href="/">Subscribe</a>

          </div>
          <div className={styles.first}>

            <a href="/" className={styles.hedTitle1}> Events</a>
  
         </div>
         

          <div className={styles.first}>

          <a href="/"  className={styles.hedTitle1}> Contact us</a>
            
          </div>


        </div>

        <div className={styles.Rightcontainer}>

          <div className={styles.Rightcontent}>

            <h4 className={styles.hedTitle}> Explore other sites </h4>


              <div className={styles.Rightcontent1}>

            <a href="/" className={styles.righttitle}>
              Shop at IKEA{" "}
            </a>
            <a href="/" className={styles.righttitle}>
              {" "}
              IKEA Museum
            </a>
            <a href="/" className={styles.righttitle}>
              {" "}
              IKEA Social Entrepreneurship
            </a>
            <a href="/" className={styles.righttitle}>
              {" "}
              IKEA Foundation
            </a>
            <a href="/" className={styles.righttitle}>
              IKEA Supplier portal (log-in){" "}
            </a>
            </div>
          </div>
        </div>
      </div>

     


    </>
  );
};

export default Footer;
