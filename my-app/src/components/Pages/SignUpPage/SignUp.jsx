import React from 'react'
import styles from './signup.module.css'
import { SignUpInput } from './SignUpInput'

export const SignUp = () => {
    
  return (
    <div className={styles.SignUpContainer}>
        <div className={styles.leftSection}>
            <h1>Create an <span style={{color:"rgb(0,88,163)"}} >IKEA Family</span> <br/> Profile</h1>
            <p>Already have an account? <a href='/' >Login</a> </p>
            <div className={styles.picContainer}>
            <div className={styles.PictureFlex1}>
            <div className={styles.PicBig}>
                <img src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg" alt="" />
            </div>
            <div className={styles.PicBig}>
                <img src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg" alt="" />
            </div>
            <div className={styles.PicSmall}>
                <img src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg" alt="" />
            </div>
            <div className={styles.PicBig}>
                <img src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg" alt="" />
            </div>
            </div>
            <div className={styles.PictureFlex2}>
            <div className={styles.PicSmall}>
                <img src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg" alt="" />
            </div>
            <div className={styles.PicSmall}>
                <img src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg" alt="" />
            </div>
            <div className={styles.PicBig}>
                <img src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg" alt="" />
            </div>
            <div className={styles.PicSmall}>
                <img src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg" alt="" />
            </div>
            <div className={styles.PicBig}>
                <img src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg" alt="" />
            </div>
            </div>
            </div>
            
            
        </div>
        <SignUpInput/>
    </div>
  )
}
