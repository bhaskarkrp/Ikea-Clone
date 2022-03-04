import React from 'react'
import Slider from 'infinite-react-carousel';
import { Offers } from "./Offers";
import style from "./Categories.module.css";

const IkeaOffers = () => {
    return (
        <div >
                <div className={style.offer}>
                {
                   Offers.map((card) => {            
                       return (
                        <Slider>
                          <div className={style.product} >
                              <img src={card.url} />
                              <div>
                              <h4>Ikea family price</h4>
                              <h4>{card.name}</h4>
                              <h4>{card.details}</h4>
                              <div>Normal price RS. {card.price}</div>
                              <h6>RS. {card.price}</h6>
                              
                              </div>
                          </div>
                        </Slider>

                       )
                   }) 
                }
                <div gridArea="e"></div>
               <div gridArea="f"></div>
                </div>
        </div>
    )
}

export default IkeaOffers