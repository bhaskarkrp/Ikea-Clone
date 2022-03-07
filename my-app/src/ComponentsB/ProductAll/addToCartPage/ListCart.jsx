import React from 'react'
import styles from '../Css/ListCart.module.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Context } from '../../Context';
export const ListCart = ({ item }) => {

    const { toCart, setToCart } = React.useContext(Context);

    const handleRemove = (item) => {
        // console.log(item, item.id)
        const deleted = toCart.filter(product => product.id !== item);
        alert("Product Removed");
        setToCart(deleted);
        console.log(deleted, toCart)
    }

    return (
        <div>
            <div className={styles.grid_card}>
                <div className={styles.quantity}>
                    <h4 className={styles.title}>1</h4>
                    <p style={{ margin: "auto 0" }}>×</p>
                </div>
                <div>
                    <img src={item.img1} alt="" className={styles.image_cart} />
                </div>
                <div>
                    <h3 >{item.title}</h3>
                    <p className={styles.size}>{item.size}</p>
                    <h3>Rs. {item.price}.00</h3>
                </div>
                <div>
                    <div className={styles.flex_card}>
                        <h4>Total</h4>
                        <h2>Rs. {item.price}.00</h2>
                    </div>
                    <div className={styles.remove} onClick={() => handleRemove(item.id)}>
                        <DeleteOutlineOutlinedIcon />
                        <p>Remove</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
