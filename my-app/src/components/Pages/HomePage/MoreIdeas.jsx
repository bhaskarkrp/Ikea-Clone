import React from 'react'
import style from "./Categories.module.css";
import Footer from '../About/AboutComponents/Footer';

const MoreIdeas = ({ data }) => {
  var str = "abcdefghijkl";
  return (
    <>
      <div className={style.ideas}>
        {data.map((card, i) => {
          return (<div key={card.id} gridArea={card.grid}><img src={card.url} alt="pic" /></div>)
        })}
      </div>

      <div style={{position:"relative", top: "110rem"}} ><Footer /> </div>
    </>
  )
}

export default MoreIdeas