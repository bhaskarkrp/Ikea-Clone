import React from 'react'
import style from "./Payment.module.css";
import rupay from "./rupay.png"
import visa from "./visa.png"
import master from "./master.png"
const PayUsing = () => {
  return (
      <>
    <div className={style.pay} >
        <h3 style={{margin: "1.7rem 0.4rem 0 0", color: "black"}}>Pay using</h3>
        <div><img src={rupay} style={{marginTop: "1.7rem"}}/></div>
        <div><img src={visa} /></div>
        <div><img src={master} style={{marginTop: "1.3rem"}}/></div>
    </div>
    <div style={{margin: "1rem auto 3rem 5rem", fontSize: "15px", fontStyle: "italic"}}>For mastercard please enter expiry date and cvv no., if available or else ignore and proceed</div>
    </>
  )
}

export default PayUsing