import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import "./Nav.css";
import { Svg } from "../Svg";
import LandingPageContext from "../ContextLandingPage/ContextLandingPage";



export default function Nav() {

  const {open,setOpen}= React.useContext(LandingPageContext)

  const sideMenuOpenHandler = ()=>{
    setOpen(true)
  }
 
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar
        sx={{ backgroundColor: "rgb(240,237,232)", color: "black" , height:"64px",top:"0px",boxShadow:"0",zIndex:"1"}}
        position="static"
      >
        <Toolbar>
          <MenuIcon onClick={sideMenuOpenHandler} style={{fontSize:"40px",marginLeft:"5px",cursor:"pointer",width:"40px"}} />
          <Svg/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
