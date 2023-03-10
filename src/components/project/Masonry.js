import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    img: {
        display: "block", cursor: "pointer", borderRadius: "10px", width: "100%",
        transition: "transform 0.7s ease",
        "&:hover": {
            // transform: "scale(1.01)"
        }
    },
    gridContainer: {

    },
}))
const Masonry = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.gridContainer} style={{ columns: props.columnCount, columnGap: "0", paddingTop: "2rem", paddingBottom: "2rem" }}>
            {props.imageUrls?.slice(1).map((img, index) => {
                return (
                    <img
                        className={classes.img} src={img.src} alt="" key={index} style={{ padding: props.gap / 2 }} onClick={() => {
                            props.handleOpenPopUp()
                            props.handleSelectImg(index)
                        }} />
                )
            }

            )}
        </div>
    )
}

export default Masonry