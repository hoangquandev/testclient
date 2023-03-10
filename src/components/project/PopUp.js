import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const useStyles = makeStyles((theme) => ({
    container: {
        position: "fixed",
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        zIndex: 1000,
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: "100%",
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
        alignItems: "center",
        "& img": {
            width: "auto",
            height: "90%",
            margin: "auto"
        }
    },
    icon: {
        position: "absolute",
        bottom: "50px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1001,
        cursor: "pointer",
        color: "white",
        "&:hover": {
            color: "#fe5600"
        }
    },
    button: {
        backgroundColor: "white",
        border: "none",
        height: "60px",
        width: "60px",
        borderRadius: "50%",
        margin: "0 20px",
        cursor: "pointer",
        "&:hover": {
            color: "#fe5600"
        }
    },
    "@media (max-width: 640px)": {
        container: {
            position: "fixed",
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        img: {
            height: "70%",
            // maxWidth: "100%",
            display: "flex",
            width: "100vw",
            justifyContent: "space-between",
            alignItems: "center",
            "& img": {
                maxWidth: "100%",
                height: "auto",
                margin: "auto"
            }
        },
        icon: {
            position: "absolute",
            bottom: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1001,
            cursor: "pointer",
            color: "white",
            width: "90%",
            textAlign: "center",
            "&:hover": {
                color: "#fe5600"
            }
        },
        button: {
            backgroundColor: "transparent",
            border: "none",
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            margin: "0 20px",
            cursor: "pointer",
            "&:hover": {
                color: "#fe5600"
            }
        },
    }
}))
const PopUp = ({ imageUrls, indexImage, handleClosePopUp }) => {
    const [indexShow, setIndexShow] = useState(indexImage)
    const classes = useStyles()
    const handleNext = () => {
        if (indexShow < (imageUrls.length - 1)) {
            setIndexShow(indexShow + 1)
        }
    }
    const handlePre = () => {
        if (indexShow > 0) {
            setIndexShow(indexShow - 1)
        }
    }
    return (
        <div className={classes.container}>
            <div style={{ height: "100vh", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className={classes.img}>

                    <img src={imageUrls[indexShow].src} alt="" />

                </div>
                {/* <div className={classes.icon}>



                </div> */}
                <button onClick={() => { handlePre() }} className={classes.button} style={{
                    position: "absolute",
                    top: "50%",
                    left: "20px",
                }}>
                    <NavigateBeforeIcon fontSize='large' />
                </button>
                <button className={classes.button} onClick={() => { handleClosePopUp() }} style={{
                    position: "absolute",
                    top: "20px",
                    right: "10px",
                }}>
                    <CloseIcon fontSize='large' />
                </button>
                <button onClick={() => { handleNext() }} className={classes.button} style={{
                    position: "absolute",
                    top: "50%",
                    right: "20px",
                }}>
                    <NavigateNextIcon fontSize='large' />
                </button>
            </div>
        </div>
    )
}

export default PopUp