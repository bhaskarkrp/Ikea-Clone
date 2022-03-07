import React from 'react'
import Slider from 'infinite-react-carousel';
import { Offers } from "./Offers";
import style from "./Categories.module.css";
import o1 from "./images/o1.png"
import o2 from "./images/o2.png"
import o3 from "./images/o3.png"
import o4 from "./images/o4.png"
import back from "./images/back.png"

const IkeaOffers = () => {
    const [pic1, setPic1] = React.useState(true)
    const [pic2, setPic2] = React.useState(true)
    const [pic3, setPic3] = React.useState(true)
    const [pic4, setPic4] = React.useState(true)
    
    return (       
            <div className={style.offer}>
                <div className={style.product} gridArea="a" >
                    <img src={pic1 ? o1 : back } onMouseEnter={() => setPic1(false) } onMouseLeave={() => setPic1(true)}/>
                    <div>
                        <h4>Ikea family price</h4>
                        <h3>FLODA</h3>
                        <div>Soy sauce bottle</div>
                        <div>Normal price RS. 99</div>
                        <h3>RS. 99</h3>
                    </div>
                </div>
                <div className={style.product} gridArea="b" >
                    <img src={pic2 ? o2 : back } onMouseEnter={() => setPic2(false) }  onMouseLeave={() => setPic2(true)}/>
                    <div>
                        <h4>Ikea family price</h4>
                        <h3>FLODA</h3>
                        <div>Soy sauce bottle</div>
                        <div>Normal price RS. 99</div>
                        <h3>RS. 99</h3>
                    </div>
                </div>
                <div className={style.product} gridArea="c" >
                    <img src={pic3 ? o3 : back } onMouseEnter={() => setPic3(false) }  onMouseLeave={() => setPic3(true)}/>
                    <div>
                        <h4>Ikea family price</h4>
                        <h3>FLODA</h3>
                        <div>Soy sauce bottle</div>
                        <div>Normal price RS. 99</div>
                        <h3>RS. 99</h3>
                    </div>
                </div>
                <div gridArea="e" className={style.e}></div>
                <div className={style.product} gridArea="d">
                    <img src={pic4 ? o4 : back } onMouseEnter={() => setPic4(false) }  onMouseLeave={() => setPic4(true)} />
                    <div>
                        <h4>Ikea family price</h4>
                        <h3>FLODA</h3>
                        <div>Soy sauce bottle</div>
                        <div>Normal price RS. 99</div>
                        <h3>RS. 99</h3>
                    </div>
                </div>
                <div gridArea="f" className={style.f}></div>   
            </div>
    )
}

export default IkeaOffers