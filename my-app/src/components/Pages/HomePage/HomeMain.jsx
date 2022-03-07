import React from 'react'
import { Navbar } from '../../../ComponentsB/ProductAll/Navbar';
import FetchAll from './Fetch/FetchAll';
import HomePage from "./HomePage";
// hello
const HomeMain = () => {
  return (
    <div>
    <Navbar/>
      <HomePage />
    </div>
  )
}

export default HomeMain