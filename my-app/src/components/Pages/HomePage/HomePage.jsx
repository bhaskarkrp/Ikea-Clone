import React from 'react'
import style from "./HomePage.module.css";
import shopnowpic from "./images/shop_now.png"
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { dict } from "./images1";
import { Div, H4, Button } from "./styled";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Categories } from "./categories.jsx";
import { Category2 } from "./Category2";
import IkeaOffers  from "./IkeaOffers";
import FetchAll from "../HomePage/Fetch/FetchAll";
import  CategoryNav  from './CategoryNav';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage = () => {

 const navigate = useNavigate()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.home}>
      <img src={shopnowpic} alt="pic" />
      <Box className={style.scrolllerItems} >
        <Tabs
          className={style.tabs}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor='red'
          indicatorColor='primary'
          aria-label="scrollable auto tabs example"
        >
          {
            dict.map((card, i) => {
              return (
                <div className={style.img}>
                  <img src={card.url} alt="pic" />
                  <Div bg={card.bg} color={card.color}>
                    <H4>{card.text1}</H4>
                    <Button onClick={()=>{navigate('/products')}}  bg={card.bg}><BsArrowRightCircleFill size={60} /></Button>
                  </Div>
                </div>
              )
            })
          }
        </Tabs>
      </Box>

      <Categories />

      <Category2 />

      <hr />
      <IkeaOffers />
      <hr />
     <FetchAll />

    </div>
  )
}

export default HomePage