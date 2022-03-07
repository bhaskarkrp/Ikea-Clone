import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import styles from './Css/Product_details.module.css'
import { Alert, Rating } from '@mui/material';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';

export const Product_details = ({ product, onHoverActiveContext }) => {

    const [onHoverActive, setOnHoverActive] = React.useState(false);
    const [wishlist, setWishlist] = React.useState(false);

    const { toCompare, setToCompare } = React.useContext(Context);

    const navigate = useNavigate();
    // console.log(product.img.img1);

    React.useEffect(() => {
        if (onHoverActiveContext) {
            setOnHoverActive(true);
        } else {
            setOnHoverActive(false);
        }
        setToCompare([]);
    }, [onHoverActiveContext])

    const onHoverHandle = () => {
        setOnHoverActive(!onHoverActive);
    }
    const handleWishList = () => {
        setWishlist(!wishlist);
    }

    const handleCheck = (e) => {
        // console.log("Working");
        if (e.target.checked) {
            setToCompare([...toCompare, product]);
        } else {
            setToCompare(toCompare.filter(item => item.id !== product.id));
        }
    }

    return (
        <div className={styles.product_div}>
            {wishlist ? <Alert onClose={() => { setWishlist(false) }}>{product.title} was added to your wishlist</Alert> : <></>}
            <div className={styles.compare_heart}>
                <div style={{ paddingBottom: "1rem", margin: "auto 0px", display: "flex", justifyContent: "space-between" }}>
                    <input type="checkbox" name="" id="" onChange={handleCheck} />
                    <label htmlFor="">Compare</label>

                </div>
                <div>
                    <FavoriteIcon onClick={handleWishList} className={styles.heart} color={wishlist ? "action" : "disabled"} />
                </div>
            </div>
            <div onMouseEnter={onHoverHandle} onMouseLeave={onHoverHandle} onClick={() => navigate(`/products/${product.id}`)}>
                {!onHoverActive ? <img className={styles.product_img} src={product.img1} alt="" /> :
                    <img className={styles.product_img} src={product.img2} alt="" />}
            </div>
            <div onClick={() => navigate(`/products/${product.id}`)}>
                <h4>{product.title}</h4>
                <p className={styles.size}>{product.size}</p>
                <h2><span className={styles.span}>RS</span>{product.price}</h2>
                <p><Rating name="read-only" size="small" value={parseInt(product.star)} class={styles.c} readOnly /></p>
            </div>
        </div >
    )
}
