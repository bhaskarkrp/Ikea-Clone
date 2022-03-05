import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./loginput.module.css";

export const LogInput = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.rightSection}>
      <div className={styles.EmailDiv}>
        <input placeholder="Email or Verified Mobile Number" required />
        <hr />
        <p>
          Login <a href="/">with an OTP</a>{" "}
        </p>
      </div>
      <div className={styles.PasswordDiv}>
        <input placeholder="Password" required/>
        <hr />
        <p>
          <a href="/">Forgot your password?</a>{" "}
        </p>
      </div>
      <button className={styles.ContinueBtn} >Continue</button>
      <div className={styles.SignUpButtons}>
      <p>Do not have an IKEA account? Create one now:</p>
      <button className={styles.ContinueBtn} onClick={()=>{navigate("/signup") }} >I'm buying for my home</button>
      <button className={styles.ContinueBtn}  onClick={()=>{navigate("/signup") }} >I'm buying for my company</button>

      </div>
    

    </div>
  );
};
