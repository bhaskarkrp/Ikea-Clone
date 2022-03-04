import React from 'react'
import { dict2 } from "./images2";
import style from "./Categories.module.css";
import { Button2, Div2 } from "./styled";

import InfiniteCarousel from 'react-leaf-carousel';

export const Categories = () => {
    return (
        <div className={style.cat} >
            <h2 style={{textAlign: "left", marginLeft:"2rem"}}>Top Categories</h2>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    }
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={.5}
                sideSize={.1}
                slidesToScroll={5}
                slidesToShow={5}
                scrollOnDevice={true}
            >
                {
                    dict2.map((card) => {
                        return (<>
                            <Div2 pic={card.url}><Button2 size={card.width}>{card.text}</Button2></Div2>                         
                        </>)
                    })
                }
            </InfiniteCarousel>
        </div>
    )
}
