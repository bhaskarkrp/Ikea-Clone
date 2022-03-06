import React from 'react'
import style from './Delivery.module.css'

import { GrDeliver } from 'react-icons/gr';
import { GiDrill } from 'react-icons/gi';
import { RiHeartPulseLine } from 'react-icons/ri';


import Ordersummary from './Ordersummary';
import Deliverycontainer from './Deliverycontainer';
import { useNavigate } from 'react-router-dom';


export const Delivery = () => {

  const navigate =  useNavigate()
  return (
    <>

      <div className={style.container}>


        {/* for logo and login */}
        <div className={style.logLogin}>

          <img src="https://www.ikea.com/global/en/images/ikea-logo.svg" alt="Logo" className={style.logo} />

          <a href="/" className={style.login} >Log in</a>

        </div>

        {/* Shoping Cart */}

        <div className={style.cartInfo}>

          <div className={style.first}>

            <a href="/" > <img src="https://ww8.ikea.com/clickandcollect/in/_Resources/Static/Packages/Inwebs.IkeaClickCollect.World/IRW/Images/arrow_active.gif" alt="icon" className={style.icon} />   </a>

            <p>Shopping cart (step 1 of 3)</p>

          </div>

          <div className={style.first}>

            <a href="/" > <img src="https://ww8.ikea.com/clickandcollect/in/_Resources/Static/Packages/Inwebs.IkeaClickCollect.World/IRW/Images/arrow_active.gif" alt="icon" className={style.icon} />   </a>

            <p>Delivery information (step 2 of 3)</p>

          </div>

          <div className={style.first}>

            <a href="/" > <img src="https://ww8.ikea.com/clickandcollect/in/_Resources/Static/Packages/Inwebs.IkeaClickCollect.World/IRW/Images/arrow_active.gif" alt="icon" className={style.icon} />   </a>

            <p>Payment method (step 3 of 3)</p>

          </div>


        </div>

        {/* for left Side Delivery Information */}


        <div className={style.middle}>




          <div className={style.leftDeliveryInfo}>

            <h4 className={style.title}>Delivery Information</h4>

            <h5 className={style.deliveryDate}>delivery date:</h5>

            <select className={style.deliveryInfo}>

              <option value="rs"> 2022-03-08 09:00 -21:00 ( Rs. 599.00) </option>

            </select>

            <h4 className={style.billingDetails} >Billing details</h4>

            <div className={style.containerBox}>

              <input type="radio" name="individual" value="individual" />Individual

              <input type="radio" name="business" value="business" className={style.Indcheck} />Business


            </div>

            <hr className={style.hr} />


            <p className={style.DeatilsTitle}>Enter Your name as per PAN</p>

            <form className={style.form}>

              <label>First name*:</label>
              <br />

              <input type="text" className={style.Input} />
              <br />
              <br />
              <label>Middle name:</label>
              <br />


              <input type="text" className={style.Input} />
              <br />
              <br />
              <label>Last name*:</label>
              <br />


              <input type="text" className={style.Input} />
              <br />
              <br />
              <label>PAN:</label>
              <br />
              <input type="number" className={style.Input} />

              <br />
              <br />
              <label>Address*:</label>
              <br />


              <input type="text" className={style.Input} />

              <br />
              <br />
              <label>Address 2:</label>
              <br />


              <input type="text" className={style.Input} />

              <br />
              <br />
              <label>Landmark:</label>
              <br />


              <input type="text" className={style.Input} />

              <div className={style.pinCode}>

                <div>
                  <label>PIN Code*:</label>
                  <br />
                  <input type="number" className={style.pinInput} />
                  <br />
                </div>

                <div>
                  <label>City*:</label>
                  <br />
                  <input type="text" className={style.cityInput} />

                </div>

              </div>


              {/* for State */}
              <label>State*:</label>
              <br />
              <select className={style.countryState}>

                <option value="state" className={style.state}>
                  Bihar
                </option>
                <option value="state" className={style.state}>
                  Delhi
                </option>
                <option value="state" className={style.state}>
                  UP
                </option>

              </select>

              {/* for Countery */}

              <br />
              <label>Country:</label>
              <br />
              <select className={style.countryState}>

                <option value="countery" className={style.state}>
                  India
                </option>
                <option value="countery" className={style.state}>
                  Nepal
                </option>
                <option value="countery" className={style.state}>
                  China
                </option>

              </select>

              <br />
              <br />
              <label>Email*:</label>
              <br />
              <input type="email" className={style.Input} />

              <br />
              <br />
              <label>Verify email address*:</label>
              <br />
              <input type="email" className={style.Input} />

              <br />
              <br />
              <label>Phone*:</label>
              <br />
              <input type="number" className={style.Input} />

            </form>


            <p className={style.paraTerm}>It is absolutely important that you enter a valid <br /> phone number so  we are able to reach you if <br /> necessary.</p>


            <p >Please read our <span className={style.TermCondition}> Terms and Conditions </span> and <span className={style.TermCondition} >Privacy <br /> policy</span> , this is protect your data carefully.</p>


            <hr className={style.hr2} />

            <div className={style.IkeaFamilyCard}>
              <label className={style.IkeaF} >IKEA Family <br /> Card number:</label>
              <input type="number" className={style.pinInput} />

            </div>

            <div className={style.btnReturnProceed}>

              <button  >Return</button>

              <button onClick={()=>{navigate("/payment")}}  >Proceed to pay</button>

            </div>




          </div>

          <Ordersummary />


        </div>



        <hr />
        {/* for Delivery component */}
        <Deliverycontainer />




        <p className={style.LastPara} > We use the lastest technology to encrypt all personal which you submit through our site or checkout.</p>






        {/* Copy Right component */}
        <div className={style.CopyRight}>


          <p className={style.paraFooter}>
            © Inter IKEA Systems B.V. 2009 - 2019 | <a href="/" className={style.FLinkCondition}> Terms of Service</a> |<a href="/" className={style.FLinkCondition}> FAQ</a> |<a href="/" className={style.FLinkCondition}> Privacy </a> |<a href="/" className={style.FLinkCondition}> Use of cookies</a>

          </p>



        </div>





      </div>

    </>
  )
}