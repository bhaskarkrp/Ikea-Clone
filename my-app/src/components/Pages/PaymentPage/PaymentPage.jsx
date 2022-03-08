import React from 'react'
import style from "./Payment.module.css";
import card1 from "./card1b.png"
import netb from "./netb1.png"
import wallet from "./wallet1.png"
import emi from "./emib.png"
import PayUsing from "./PayUsing";
import SelectCard from "./SelectCard";
import AllSymbols from './AllSymbols';
import { Context } from '../../../ComponentsB/Context';

const PaymentPage = () => {
    const {finalCartValue} = React.useContext(Context);
    return (
        <div >
            <div className={style.top}>
                <h2>IKEA ECOM Hyderabad</h2>
                <div>
                    <h4>Reference No : 168342098</h4>
                    <h3>Amount : {finalCartValue}.00</h3>
                </div>
            </div>

            <div className={style.payment}>
                <div className={style.symbolsBar}>
                    <div className={style.symbol}>
                        <div className={style.method}>
                            <img src={card1} alt="Loading" />
                        </div>
                        <div className={style.text}>CARDS</div>
                    </div>
                    <div className={style.symbol}>
                        <div className={style.method}>
                            <img src={netb} alt="Loading" />
                        </div>
                        <div className={style.text}>NET BANKING</div>
                    </div>
                    <div className={style.symbol}>
                        <div className={style.method}>
                            <img src={wallet} alt="Loading" />
                        </div>
                        <div className={style.text}>WALLET</div>
                    </div>
                    <div className={style.symbol}>
                        <div className={style.method}>
                            <img src={emi} alt="Loading" />
                        </div>
                        <div className={style.text}>EMI</div>
                    </div>
                    <div className={style.symbol}>
                        <div className={style.method}>
                            <img src={emi} alt="Loading" />
                        </div>
                        <div className={style.text}>UPI</div>
                    </div>
                </div>
                <PayUsing />
                <SelectCard />
            </div>
            <AllSymbols />
        </div>
    )
}

export default PaymentPage