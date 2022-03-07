import React from 'react';
import { SetGetAPI } from "../../JS/SetGetAPI"
import { Context } from '../Context';
import { Product_details } from './Product_details';
import styles from './Css/ProductGrid.module.css';
import { useNavigate } from 'react-router-dom';

export const Product_grid = ({ filterApplied }) => {

    const { getAPi } = SetGetAPI();

    const { productData, toCompare, onHoverActiveContext } = React.useContext(Context);
    const navigate = useNavigate();

    React.useEffect(() => {
        getAPi(fetch("https://fake-server-app5622.herokuapp.com/HAE"));
        // console.log(productData)
    }, []);

    if (filterApplied === "price: low to high") {
        productData.sort((a, b) => +a.price - +b.price);
        // console.log(productData);
    } else if (filterApplied === "Price: high to low") {
        productData.sort((a, b) => +b.price - +a.price);
    } else if (filterApplied === "Most Popular" || filterApplied === "Best Match") {
        productData.sort((a, b) => +b.star - +a.star);
    }

    return (
        <div>
            <div className={styles.border}>

                <button className={toCompare.length > 1 ? styles.button_compare : styles.button_compare_disable}
                    disabled={toCompare.length > 1 ? false : true} onClick={() => navigate("/products/comparision")}>Compare Products</button>

            </div>
            <div className={styles.grid_container}>
                {productData.map(product => <Product_details key={product.id} product={product} onHoverActiveContext={onHoverActiveContext} />)}
            </div>
        </div >
    )
}
