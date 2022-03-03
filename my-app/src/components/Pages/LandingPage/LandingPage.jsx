import React from 'react'
import { Banner } from './Banner/Banner'
import { CardFlex } from './CardFlexComponent3/CardFlex'
import { FooterLandingPage } from './FooterLandingPage/FooterLandingPage'
import Nav from './NavBar/Nav'
import BasicModal from './SideMenu/SideMenu'
import { Slogan } from './SloganComponent4/Slogan'



export const LandingPage = () => {
  return (
    <>
    <div style={{backgroundColor:"rgb(240,237,232)"}}>
    <Nav/>
      <BasicModal/>
      <Banner/>
      <CardFlex/>
      <Slogan/>
      <FooterLandingPage/>
    </div>
      
    </>
  )
}
