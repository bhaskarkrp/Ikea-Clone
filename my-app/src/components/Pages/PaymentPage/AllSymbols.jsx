import React from 'react'
import style from "./AllSymbols.module.css"
import verysign from "./verysign.png"
import veryvisa from "./veryvisa.png"
import securetrust from "./securetrust.png"
import world from "./world.png"
const AllSymbols = () => {
  return (
    <>
      <div className={style.Paysymbols} >
        <div className={style.symbol}>
          <div><img src={verysign} alt="Loading" /></div>
          <div><img src={veryvisa} alt="Loading" /></div>
          <div><img src={securetrust} alt="Loading" /></div>
        </div>
        <div className={style.world}><img src={world} alt="Loading" /></div>
      </div>
      {/* <div>Your </div> */}
    </>
  )
}

export default AllSymbols