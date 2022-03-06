import { style } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context';
import styles from '../Css/CartPage.module.css'
import Deliverycontainer from './DeliveryInfo/Deliverycontainer';
import { ListCart } from './ListCart';

export const Cartpage = () => {
    const { toCart, setToCart } = React.useContext(Context);
    const [totalCartValue, setTotalCartValue] = React.useState("");
    const navigate = useNavigate();

    React.useEffect(() => {
        // const total = toCart.reduce((prev, curr) => (prev.price += curr.price), 0);
        let total = 0;
        toCart.forEach(item => {
            console.log(item.price);
            total += +item.price;
        })
        if (total > 0) {
            total += 599;
        }
        // console.log(total, toCart);
        setTotalCartValue(total);
    }, [toCart])
    return (
        <div className={styles.starter}>
            <h1>Your Shopping cart</h1>
            {
                totalCartValue > 0 ? (
                    <div>
                        <div className={styles.outer_div_price}>
                            <div>
                                <div>
                                    <p className={styles.upper_para}>{toCart.length} Products in shopping cart</p>
                                </div>
                                <div className={styles.flex_fee}>
                                    <p className={styles.upper_para}>Delivery fee/Picking fee</p>
                                    <h4>RS. 599.00</h4>
                                </div>
                            </div>
                            <div className={styles.flex_fee}>
                                <h2>Total Amount: </h2>
                                <h2>RS. {totalCartValue}.00  </h2>
                            </div>
                            <div style={{ float: 'right', cursor: "pointer", zIndex: "1" }} >
                                <p className={styles.upper_para2}>All Prices are inclusive of taxes</p>
                                <button className={styles.order_palce} onClick={() => navigate("/delivery")}>Place Order</button>
                            </div>
                        </div>
                        <div className={styles.list_div}>
                            {
                                toCart.map(item => <ListCart key={item.id} item={item} />)
                            }
                        </div>

                        <Deliverycontainer />

                    </div>
                ) : (
                    <>
                        <h2>Add Something to your Cart</h2>
                        <button className={styles.explore} onClick={() => navigate("/")}>Explore</button>
                    </>
                )
            }

        </div>
    )
}
