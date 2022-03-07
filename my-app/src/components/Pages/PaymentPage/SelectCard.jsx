import React from 'react'
import { useNavigate } from 'react-router-dom';
import Success from '../../../JS/Success/Success';
import LandingPageContext from '../LandingPage/ContextLandingPage/ContextLandingPage';
import style from "./Payment.module.css";


const SelectCard = () => {
    const { gotSuccess, setgotSuccess } = React.useContext(LandingPageContext)
    const [state, setState] = React.useState("Select card")
    const navigate = useNavigate();
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
            <button onClick={() => {
                setgotSuccess(true);
                setTimeout(() => {
                    navigate("/products")
                }, 2000)
            }} >PAY NOW</button>
            <Success />
            <div style={{ width: "100px", margin: "0rem auto auto 19rem", color: "blue", textDecoration: "underline" }}>Cancel</div>
        </div>
    )
}

export default SelectCard