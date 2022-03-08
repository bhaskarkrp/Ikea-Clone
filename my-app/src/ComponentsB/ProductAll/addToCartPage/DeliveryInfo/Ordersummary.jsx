import React from 'react'
import { Context } from '../../../Context';

import styles from './Ordersummary.module.css'

const Ordersummary = () => {
  const { toCart } = React.useContext(Context);
  const [totalCartValue, setTotalCartValue] = React.useState("");
  const {finalCartValue, setFinalCartValue} = React.useContext(Context);


  React.useEffect(() => {
    // const total = toCart.reduce((prev, curr) => (prev.price += curr.price), 0);
    let total = 0;
    toCart.forEach(item => {
      console.log(item.price);
      total += +item.price;
    });
    if (total > 0) {
      setTotalCartValue(total);
      total += 599;
    }
    // console.log(total, toCart);
    setFinalCartValue(total);
  }, [toCart])
  return (

    <div style={{ display: "flex", flexDirection: "column" }}>

      <div className={styles.container}>

        <h3>Order Summary</h3>

        <div className={styles.EditItem}>

          <span> {toCart.length} item</span>

          <a href="/" className={styles.edit}>Edit</a>

        </div>

        <div >
          {toCart.map(item => (
            <>
              <div className={styles.ItemsPrizeTotal}>

                <h4> 1 x</h4>

                <img src={item.img1} alt="img" className={styles.img} />


                <div className={styles.productInfo}>

                  <h4>{item.title}</h4>
                  <p>{item.size}<br />

                    base, white
                  </p>
                  <p className={styles.Atricle} >Article no:391.246.17</p>

                  <div className={styles.Total}>

                    <h4>Total</h4>
                    <h4>Rs. {item.price}.00</h4>

                  </div>


                </div>


              </div>
              <hr />
            </>
          ))}
        </div>

      </div>

      <div>
        <hr className={styles.Line} />


        <div className={styles.ContainerOrderValue}>


          <div className={styles.Order}>

            <h4> Order value:</h4>
            <h4> Rs. {totalCartValue}.00</h4>

          </div>

          <div className={styles.DeliveryFee}>

            <span>Delivery fee/Picking fee</span>

            <span>Rs. 599.00</span>

          </div>


        </div>

        {/* dot icon left */}
        <hr className={styles.dotLine} />

        <hr className={styles.BoldLine} />

        <div className={styles.TotalAmout}>

          <h4>Total amount</h4>
          <h4>Rs. {finalCartValue}.00</h4>

        </div>
      </div>



    </div>
  )
}

export default Ordersummary