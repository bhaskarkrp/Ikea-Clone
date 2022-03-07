import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from '../Css/InfoProduct.module.css';
import { ReadMore } from '../Css/Readmore';
import { Context } from '../../Context';

export const InfoProduct = ({ singleProduct }) => {

    const productLinks = ["Product Details", "Measurements", "Reviews"];
    const { open, setOpen, setSideMenuValue } = React.useContext(Context);


    return (
        <div className={styles.starter}>
            <div>
                <p className={styles.text_para}>A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the MICKE series to extend your work space. The clever design at the back hides messy cables.</p>
                <p className={styles.text_small}>Delivery and assembly prices not included.</p>
                <p className={styles.text_exs}>Article Number</p>
                <p className={styles.blacked_text}>803.542.81</p>
            </div>

            <div>
                {productLinks.map((link) => (
                    // console.log(link)
                    <div className={styles.div_flex}>
                        <h2 className={styles.h2_text} onClick={() => {
                            setSideMenuValue(singleProduct)
                            setOpen(!open)
                        }}>{link}</h2>
                        <ArrowForwardIcon />
                    </div>
                ))}
            </div>
            {/* To be completed */}
            <div className={styles.flex_image_text}>
                <div style={{ width: '65%' }}>

                    <img className={styles.img_info} src="https://www.ikea.com/in/en/images/products/micke-desk-white__0921905_pe787996_s5.jpg?f=s" alt="" />
                </div>
                <div className={styles.div_text}>
                    <p className={styles.story}>Story</p>
                    <h2 className={styles.heading}>Our take on wood</h2>
                    <p className={styles.paragraph}>Wood is the material most commonly associated with IKEA furniture, and for good reasons. It’s renewable, recyclable, durable, ages beautifully and it is an important part of our Scandinavian design heritage. At IKEA we believe that sourced in responsible way, wood is a key change driver for climate mitigation. In 2012, we set a goal that by 2020 our wood would be from more sustainable sources. We are happy to announce that we have reached this goal and today, more than 98% of the wood used for IKEA products is either FSC-certified or recycled.</p>
                    <h2 className={styles.heading}>Forests are critical for life on earth</h2>
                    <p className={styles.paragraph}>
                        <ReadMore>
                            Forests contribute to maintaining balance in the atmosphere, purify the air that we breathe and are part of the water cycle. They nourish wildlife biodiversity and provide homes for indigenous communities who depend on forests for their livelihoods. 90% of plant and animal species living on the planet need forests to survive. They provide sources of food, fuel, timber and many other ecosystem services that we rely upon.

                        </ReadMore>
                    </p>
                </div>

            </div>

        </div >
    )
}
