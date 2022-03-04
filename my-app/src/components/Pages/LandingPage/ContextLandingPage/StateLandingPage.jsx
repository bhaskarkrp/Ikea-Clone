import React, { useState } from "react";
import LandingPageContext from "./ContextLandingPage";


export const StateLandingPage = (props) => {

    const [open, setOpen] = React.useState(false);
   
  return (
    <div>
        <LandingPageContext.Provider value={{open,setOpen}}>
        {props.children}
        </LandingPageContext.Provider>
    </div>
  )
}
