import React, { useState } from "react";
import LandingPageContext from "./ContextLandingPage";


export const StateLandingPage = (props) => {
 
    const  [gotSuccess,setgotSuccess] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [isLogin,setIsLogin]= React.useState(false);
   
  return (
    <div>
        <LandingPageContext.Provider value={{open,setOpen,isLogin,setIsLogin,gotSuccess,setgotSuccess}}>
        {props.children}
        </LandingPageContext.Provider>
    </div>
  )
}
