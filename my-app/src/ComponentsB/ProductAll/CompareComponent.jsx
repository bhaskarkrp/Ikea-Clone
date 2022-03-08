import React from 'react';
import styles from "./Css/CompareProducts.module.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating } from '@mui/material';
// import { style } from '@mui/system';
import { Context } from '../Context';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CompareComponent = ({ item }) => {

    const { toCompare, setToCompare, onHoverActiveContext } = React.useContext(Context);
    const [wishlist, setWishlist] = React.useState(false);
    const [onHoverActive, setOnHoverActive] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (onHoverActiveContext) {
            setOnHoverActive(true);
        } else {
            setOnHoverActive(false);
        }
    }, [onHoverActiveContext, toCompare])

    // const onHoverHandle = () => {
    //     setOnHoverActive(!onHoverActive);
    // }
    const handleWishList = () => {
        setWishlist(!wishlist);
    }
    const handleRemoveFromCompare = (productId) => {
        console.log(toCompare)
        let newList = toCompare.filter((item => item.id !== productId))
        setToCompare(newList);
    }

    return (
        <div>
            {/* Can cut from here */}
            <div className={styles.one_product_div}>
                {wishlist ? <Alert onClose={() => { setWishlist(false) }}>{item.title} was added to your wishlist</Alert> : <></>}
                {/* one product */}
                <div className={styles.upper_part}>
                    {/* upper part */}
                    <div className={styles.div_flex_two_buttons}>
                        <CloseOutlinedIcon onClick={() => handleRemoveFromCompare(item.id)} style={{ cursor: 'pointer' }} />
                        <FavoriteIcon onClick={handleWishList} color={wishlist ? "action" : "disabled"} />
                    </div>
                    <div >
                        {!onHoverActive ? <img className={styles.image_compare} src={item.img1} alt="" onClick={() => navigate(`../${item.id}`)} /> :
                            <img className={styles.image_compare} src={item.img2} alt="" onClick={() => navigate(`../${item.id}`)} />}
                    </div>
                    <div>
                        {/* Details */}
                        <h3>{item.title}</h3>
                        <p className={styles.size}>{item.size}</p>
                        <h2><span className={styles.span}>RS</span>{item.price}</h2>
                    </div>
                </div>
                <div >
                    <p className={styles.text_small_lite}>A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the MICKE series to extend your work space. The clever design at the back hides messy cables.</p>
                </div>
                <div className={styles.last_div}>
                    <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Material</h2>
                    <ul>
                        <li>Wood (including board)</li>
                        <li>Metal</li>
                    </ul>
                </div>
                <div className={styles.last_div}>
                    <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Measure</h2>
                    <p className={styles.measurement}>Width - 142 cm (55 7/8 ")</p>
                    <p className={styles.measurement}>Height - 75 cm (29 1/2 ")
                    </p>
                    <p className={styles.measurement}>Depth - 50 cm (19 5/8 ")</p>
                </div>
                <div className={styles.last_div}>
                    <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Ratings</h2>
                    <h2>{item.star}</h2>
                    <p><Rating name="read-only" size="small" value={parseInt(item.star)} class={styles.c} readOnly /></p>
                </div>
            </div>
        </div>
    )
}
