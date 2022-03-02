import React from 'react'
import { Banner } from './Banner/Banner'
import Nav from './NavBar/Nav'
import BasicModal from './SideMenu/SideMenu'



export const LandingPage = () => {
  return (
    <>
      <Nav/>
      <BasicModal/>
      <Banner/>
      
    </>
  )
}
