import { Rating } from '@mui/material';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { SetGetAPI } from '../../../JS/SetGetAPI';
import { Context } from '../../Context';
import StraightenIcon from '@mui/icons-material/Straighten';
import styles from '../Css/SingleProductDetail.module.css'
import { InfoProduct } from './InfoProduct';

export const SingleProductDetail = () => {

    const { singleProduct, toCart, setToCart } = React.useContext(Context);
    const id = useParams();

    const { getAPiSingle } = SetGetAPI();
    const navigate = useNavigate();

    // console.log(toCart);


    React.useEffect(() => {
        getAPiSingle(fetch(`https://fake-server-app5622.herokuapp.com/HAE/${id.id}`));

    }, []);

    const checkInCart = () => {
        let check = toCart.filter(item => item.id === singleProduct.id);
        return check.length;
    }
    const handleAddCart = () => {
        let check = toCart.filter(item => item.id === singleProduct.id);
        // setToCart([])
        if (check.length === 0) {
            setToCart([...toCart, singleProduct]);
        } else {
            alert("Product is Already in Cart");
        }
        // console.log(toCart);
    }

    return (
        <div className={styles.starter}>
            <div className={styles.detail_section}>
                <div className={styles.image_section}>
                    <img className={styles.images} src={singleProduct.img1} alt="" />
                    <img className={styles.images} src={singleProduct.img2} alt="" />
                </div>
                <div style={{ paddingTop: "1rem", paddingRight: "1rem" }}>
                    <div className={styles.title_price}>
                        <h2>{singleProduct.title}</h2>
                        <h2><span className={styles.span}>RS</span>{singleProduct.price}</h2>
                    </div>
                    <div className={styles.border_} >
                        <p className={styles.size}>{singleProduct.size}</p>
                        <p className={styles.size2}>Price incl. of all taxes</p>
                        <p><Rating name="read-only" size="small" value={parseInt(singleProduct.star)} class={styles.c} readOnly /></p>
                    </div>
                    <div>
                        <form className={styles.form} action="" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="">Eligible for delivery? </label>
                            <input type="text" placeholder="40001" />
                            <input type="submit" value="Check" />
                        </form>
                        <button className={styles.button_to_cart} onClick={handleAddCart}>{checkInCart() === 0 ? "Add to cart" : "Added to cart"}</button>
                    </div>

                    <div className={styles.measure}>
                        <StraightenIcon />
                        <p style={{ marginLeft: "0.85rem", color: "#484848", fontSize: "1rem", borderBottom: "1px solid #484848" }}>Check in-store stock</p>
                        <button className={toCart.length > 0 ? styles.go_to_cart : styles.go_to_cart_disable}
                            disabled={toCart.length > 0 ? false : true} onClick={() => navigate("/products/cart")}
                        >
                            {toCart.length > 0 ? "Checkout the Cart" : "Add Something to the Cart"}
                        </button>
                    </div>
                </div>
            </div>

            <InfoProduct singleProduct={singleProduct} />
        </div >
    )
}
