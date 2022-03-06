import React, { useState } from "react";
import LandingPageContext from "./ContextLandingPage";


export const StateLandingPage = (props) => {

    const [open, setOpen] = React.useState(false);
    const [isLogin,setIsLogin]= React.useState(false);
   
  return (
    <div>
        <LandingPageContext.Provider value={{open,setOpen,isLogin,setIsLogin}}>
        {props.children}
        </LandingPageContext.Provider>
    </div>
  )
}
