import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Svg } from "../Svg";
import CloseIcon from "@material-ui/icons/Close";

import styles from './SideMenu.module.css'
import LandingPageContext from "../ContextLandingPage/ContextLandingPage";
import { NavLink } from "react-router-dom";


// Use tRANSITION COMPONENT


const style = {
  backgroundColor: "rgb(0,88,163)",
  width: "36.26%",
  marginLeft: "0px",
  position: "relative",
  left: "0px",
  top: "0px",
  height: "100vh",
  borderRadius: "0px",
  zIndex: "1",
  boxSizing: "border-box",
  paddingTop: "12px",
  paddingLeft: "30px",
  '@media screen and (max-width: 1020px)': {
    width: "100%"
  },
};

// if(document.window.innerWidth<1020){
//   style.width="100%"
// }

export default function BasicModal() {

  const {open,setOpen} = React.useContext(LandingPageContext)

  

 
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.SideContainer}>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       
      >
        <Box sx={style}>
          <div>
            <CloseIcon onClick={handleClose} style={{ color: "white", fontSize: "40px", cursor:"pointer", marginBottom:"-3px" }} />
            <Svg />
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 18, ml:7 }}>
            <div>
            
              <NavLink className={styles.anchorTag} to="/home">Shop</NavLink>
            </div>
            <div>
              <NavLink className={styles.anchorTag} to="./about" >About IKEA</NavLink>
            </div>
            <div>
              {" "}
              <a className={styles.anchorTag}  href="/">IKEA Museum</a>
            </div>
            <div>
              <a className={styles.anchorTag}  href="/">Internationals Sails</a>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
