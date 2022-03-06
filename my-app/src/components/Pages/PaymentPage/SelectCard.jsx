import React from 'react'
import style from "./Payment.module.css";

const SelectCard = () => {
    const [state, setState] = React.useState("Select card")
    const handleChange = (e) => { 
        setState(e.target.value)
     }
    return (
        <div className={style.cardOption}>
            Select credit card option:  <select value={state} onChange={handleChange}>
                <option value="">--Select card--</option>
                <option value="Visa">VISA</option>
                <option value="Mastercard">MASTERCARD</option>
                <option selected value="Rupay">RUPAY</option>               
            </select>
            <button>PAY NOW</button>
            <div style={{width: "100px", margin: "0rem auto auto 19rem", color: "blue", textDecoration: "underline"}}>Cancel</div>
        </div>
    )
}

export default SelectCard