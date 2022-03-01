import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Svg } from "../Svg";
import CloseIcon from "@material-ui/icons/Close";

import styles from './SideMenu.module.css'
import LandingPageContext from "../ContextLandingPage/ContextLandingPage";

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
};

export default function BasicModal() {

  const {open,setOpen} = React.useContext(LandingPageContext)

 
  const handleClose = () => setOpen(false);

  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <CloseIcon style={{ color: "white", fontSize: "40px" }} />
            <Svg />
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 18, ml:7 }}>
            <div>
              <a className={styles.anchorTag} href="/">Shop</a>
            </div>
            <div>
              <a className={styles.anchorTag}  href="/">About IKEA</a>
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
