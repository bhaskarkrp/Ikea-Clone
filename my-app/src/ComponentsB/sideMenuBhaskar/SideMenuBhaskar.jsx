import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { Rating } from '@mui/material';

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// import { Svg } from "../Svg";
import CloseIcon from "@mui/icons-material/Close";

import styles from './sideMenuBhaskar.module.css'
import { Context } from "../Context";


// Use tRANSITION COMPONENT


const style = {
    backgroundColor: "white",
    width: "25.26%",
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
    border: "none",
    '@media screen and (max-width: 1020px)': {
        width: "100%"
    },
};

// if(document.window.innerWidth<1020){
//   style.width="100%"
// }

export default function SideMenuBhaskar({ value }) {

    // const { open, setOpen } = useContext(Context);

    const { open, setOpen, setSideMenuValue } = useContext(Context)



    const handleClose = () => {
        setSideMenuValue("")
        setOpen(false)
    };

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            // closeTimeoutMS={500}
            // style={{ transition: "all 500ms ease-in-out" }}
            >
                <Box sx={style}>
                    <div>
                        <CloseIcon onClick={handleClose} style={{ color: "black", fontSize: "40px", cursor: "pointer", marginBottom: "-3px" }} />
                        {/* <Svg /> */}
                    </div>

                    <Typography id="modal-modal-description" sx={{ mt: 18, ml: 7 }}>
                        {
                            value === "Navbar" ? (
                                <>
                                    <div>
                                        <a className={styles.anchorTag} href="/">Home</a>
                                    </div>
                                    <div>
                                        <a className={styles.anchorTag} href="/products">Products</a>
                                    </div>
                                    <div>
                                        <a className={styles.anchorTag} href="/">Rooms</a>
                                    </div>
                                    <div>
                                        {" "}
                                        <a className={styles.anchorTag} href="/about">New at IKEA</a>
                                    </div>
                                    <div>
                                        <a className={styles.anchorTag} href="/">All offers</a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className={styles.last_div}>
                                        <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Material</h2>
                                        <ul>
                                            <li>Wood (including board)</li>
                                            <li>Metal</li>
                                        </ul>
                                    </div>
                                    <div className={styles.last_div}>
                                        <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Measure</h2>
                                        <p className={styles.measurement}>Width - 142 cm (55 7/8 ")</p>
                                        <p className={styles.measurement}>Height - 75 cm (29 1/2 ")
                                        </p>
                                        <p className={styles.measurement}>Depth - 50 cm (19 5/8 ")</p>
                                    </div>
                                    <div className={styles.last_div}>
                                        <h2 style={{ borderBottom: '1px solid #dfdfdf', paddingBottom: '1.5rem' }}>Ratings</h2>
                                        <h2>{value.star}</h2>
                                        <p><Rating name="read-only" size="small" value={parseInt(value.star)} class={styles.c} readOnly /></p>
                                    </div>
                                </>
                            )
                        }
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}