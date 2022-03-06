
import { NavLink, useNavigate } from "react-router-dom";
import LandingPageContext from "../LandingPage/ContextLandingPage/ContextLandingPage";
import styles from "./loginput.module.css";
import React, { useContext, useRef, useState } from "react";
export const LogInput = () => {


  const { isLogin, setIsLogin } = useContext(LandingPageContext)
  const [alert, setAlert] = React.useState(false);

  const logInUserName = useRef()
  const logInPassword = useRef()
  const navigate = useNavigate()

  async function postMe(data) {

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    let dataSend = await res.json();
    return dataSend
  }

  const loginHandler = () => {
    const login_data = {
      username: logInUserName.current.value,
      password: logInPassword.current.value
    }


    console.log(login_data);
    postMe(login_data).then((res) => {
      setIsLogin(true)
      console.log(res);
    }).catch((err) => {
      // alert("Signup First")
      setAlert(true)
      // navigate("/signup")
    })
  }

  return (
    <div className={styles.rightSection}>
      <div className={styles.EmailDiv}>
        <input placeholder="User Name" ref={logInUserName} required />
        <hr />
        <p>
          Login <a href="/">with an OTP</a>{" "}
        </p>
      </div>
      <div className={styles.PasswordDiv}>
        <input type="password" placeholder="Password" ref={logInPassword} required />
        <hr />
        <p>
          <a href="/">Forgot your password?</a>{" "}
        </p>
      </div>
      <div>
        {alert && <p style={{ color: 'red', marginTop: "3rem" }}>User doesn't exist. Please <span style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>Signup</span>!</p>}
      </div>
      <button className={styles.ContinueBtn} onClick={loginHandler} >Continue</button>
      <div className={styles.SignUpButtons}>
        <p>Do not have an IKEA account? Create one now:</p>
        <button className={styles.ContinueBtn} onClick={() => { navigate("/signup") }} >I'm buying for my home</button>
        <button className={styles.ContinueBtn} onClick={() => { navigate("/signup") }} >I'm buying for my company</button>

      </div>


    </div >
  );
};
