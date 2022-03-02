import React, { useState } from "react";
import LandingPageContext from "./ContextLandingPage";


export const StateLandingPage = (props) => {

    const [open, setOpen] = React.useState(false);
    const [searchTransition,setSearchTransition]=useState(true);
  return (
    <div>
        <LandingPageContext.Provider value={{open,setOpen,searchTransition,setSearchTransition}}>
        {props.children}
        </LandingPageContext.Provider>
    </div>
  )
}
