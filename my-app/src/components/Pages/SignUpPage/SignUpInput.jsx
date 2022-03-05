import styles from "./signupInput.module.css";

import React from "react";

export const SignUpInput = () => {
  return (
    <div className={styles.rightSection}>
      <div className={styles.topInputDiv}>
        <p className={styles.TitleRight}>
          Become a member of IKEA Family today. Did we <br /> mention it's free
          to join?
        </p>
        <div className={styles.radioInput}>
          <input type="radio" className={styles.radioInputMain} />
          <span>
            Yes, I want to enjoy rewards, discounts and a lot more! Get the
            details
          </span>
        </div>
        <div className={styles.radioInput}>
          <input type="radio" className={styles.radioInputMain} />
          <span>
            No thanks, I just want to create an IKEA account today. Maybe
            another day. Get the <br /> details
          </span>
        </div>
      </div>

      <div className={styles.mainInputDiv}>
        <div>
          <input placeholder="First Name" required />
          <hr />
        </div>
        <div>
          <input placeholder="SurName" required />
          <hr />
        </div>

        <div>
          <div>
            <label style={{ fontSize: "12px" }}>Mobile</label>
          </div>{" "}
          <span>+91</span>
          <input required />
          <hr />
        </div>
        <div>
          <div>
            <label style={{ fontSize: "12px" }}>Email (username)</label>
          </div>
          <input placeholder="Email (username)" required />
          <hr />
        </div>
        <div>
          <div>
            <label style={{ fontSize: "12px" }}>Password</label>
          </div>
          <input type="password" placeholder="Password" required />
          <hr />
        </div>
      </div>

      <div className={styles.checkBoxGroup}>
        <input type="checkbox" />
        <span>I would like to receive news, tips and marketing offers from IKEA.</span>
        <div className={styles.CheckPad}>
        <div>
        <input type="checkbox" />
       <span>Via email</span>
        </div>
        <div>
        <input type="checkbox" />
        <span>Via SMS</span>
        </div>
        <div>
        <input type="checkbox" />
        <span>Via direct mail</span>
        </div>
          
        </div>
        <input className={styles.CheckLast} type="checkbox" />
        <span>I have read and understood the <a href="/">Privacy Policy.</a> </span>
      </div>
      <button className={styles.createProfile} >Create Profile</button>
    </div>
  );
};
