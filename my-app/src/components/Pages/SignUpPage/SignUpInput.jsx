import styles from "./signupInput.module.css";
import React, { useContext, useRef, useState } from "react";

import LandingPageContext from "../LandingPage/ContextLandingPage/ContextLandingPage";
import { Navigate, useNavigate } from "react-router-dom";

export const SignUpInput = () => {
  const navigate = useNavigate()
  const nameref = useRef();
  const userNameref = useRef();
  const emailInputref = useRef();
  const passwordInputref = useRef();
  const mobileref = useRef();

  async function postMe(data) {
    let res = await fetch(
      ` https://masai-api-mocker.herokuapp.com/auth/register`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
    let dataSend = await res.json();
    console.log(dataSend);
    return dataSend;
  }

  const submitHandler = () => {
    let register_data = {
      name: nameref.current.value,
      email: emailInputref.current.value,
      password: passwordInputref.current.value,
      username: emailInputref.current.value,
      mobile: mobileref.current.value,
      description: "hello",
    };
   
    postMe(register_data)
      .then((res) => {
        navigate('/login')
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <input placeholder="First Name" ref={nameref} required />
          <hr />
        </div>
        <div>
          <input placeholder="SurName" ref={userNameref} required />
          <hr />
        </div>

        <div>
          <div>
            <label style={{ fontSize: "12px" }}>Mobile</label>
          </div>{" "}
          <span>+91</span>
          <input ref={mobileref} required />
          <hr />
        </div>
        <div>
          <div>
            <label style={{ fontSize: "12px" }}>Email (username)</label>
          </div>
          <input placeholder="Email (username)" ref={emailInputref} required />
          <hr />
        </div>
        <div>
          <div>
            <label style={{ fontSize: "12px" }}>Password</label>
          </div>
          <input
            type="password"
            ref={passwordInputref}
            placeholder="Password"
            required
          />
          <hr />
        </div>
      </div>

      <div className={styles.checkBoxGroup}>
        <input type="checkbox" />
        <span>
          I would like to receive news, tips and marketing offers from IKEA.
        </span>
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
        <span>
          I have read and understood the <a href="/">Privacy Policy.</a>{" "}
        </span>
      </div>
      <button onClick={submitHandler} className={styles.createProfile}>
        Create Profile
      </button>
    </div>
  );
};
