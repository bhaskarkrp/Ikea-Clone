import React from 'react'

import styl from './Deliverycontainer.module.css'

import { GrDeliver } from 'react-icons/gr';
import { GiDrill } from 'react-icons/gi';
import { RiHeartPulseLine } from 'react-icons/ri';

const Deliverycontainer = () => {
  return (
    <>

      <div className={styl.DeliveryContainer}>


        <div className={styl.DeliveryService}>

          <GrDeliver className={styl.DeliveryIcon} />

          <div className={styl.DeliveryTitle}>

            <h4>Our Delivery Service</h4>

            <p>Safe & contact-less delvery <br /> according to government <br />
              permission.
            </p>
            <br />
            <a href="/" className={styl.MorInfoLink}>More Info</a>

          </div>

        </div>

        <div className={styl.DeliveryService}>

          <RiHeartPulseLine className={styl.DeliveryIcon} />

          <div className={styl.DeliveryTitle}>

            <h4>Our Delivery Policy</h4>

            <p>We have made some updates to <br /> our return policy due to the <br />
              COVID 19 situation.
            </p>
            <br />
            <a href="/" className={styl.MorInfoLink}>More Info</a>

          </div>

        </div>


        <div className={styl.DeliveryService}>

          <GiDrill className={styl.DeliveryIcon} />

          <div className={styl.DeliveryTitle}>

            <h4>Our Delivery Service</h4>

            <p>Sometimes it is nice to have  <br />someone else asseble it for  <br />
              you.
            </p>
            <br />
            <a href="/" className={styl.MorInfoLink}>To the FAQ pages</a>

          </div>

        </div>


      </div>







    </>
  )
}

export default Deliverycontainer