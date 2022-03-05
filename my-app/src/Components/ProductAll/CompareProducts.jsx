import React from 'react';
import { Context } from '../Context';
import styles from "./Css/CompareProducts.module.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating } from '@mui/material';
import { style } from '@mui/system';
import { CompareComponent } from './CompareComponent';


export const CompareProducts = () => {
    const { toCompare, setOnHoverActiveContext, onHoverActiveContext } = React.useContext(Context);
    const [wishlist, setWishlist] = React.useState(false);
    const [onHoverActive, setOnHoverActive] = React.useState(false);

    React.useEffect(() => {
        if (onHoverActiveContext) {
            setOnHoverActive(true);
        } else {
            setOnHoverActive(false);
        }
    }, [onHoverActiveContext])

    // const onHoverHandle = () => {
    //     setOnHoverActive(!onHoverActive);
    // }
    // const handleWishList = () => {
    //     setWishlist(!wishlist);
    // }
    // console.log(toCompare);

    return (

        <div className={styles.starter}>
            <div>
                <h1>Product comparison</h1>
                <p className={styles.text_small}>Comparing {toCompare.length} products</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: "4.5rem", paddingBottom: "1.5rem", borderBottom: "solid 1px #dfdfdf" }}>
                <button className={styles.button} onClick={() => setOnHoverActiveContext(false)}>Product</button>
                <button className={styles.button} onClick={() => setOnHoverActiveContext(true)}>Rooms</button>
            </div>

            <div>
                <div className={styles.completeDiv}>
                    {toCompare.map(item => (
                        <CompareComponent key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div >
    )
}
