import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        height: "900px"
    },
    largeImage: {
        flex: 1,
        height: "100%",
        // aspectRatio: "9/16",
        "& > img": {
            // width: "100%",
            height: "100%"
        }
    },
    smallImage: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: 'center',
        gap: "10px",
        height: "100%"
        // width: "100%",
        // aspectRatio: "9/16"
    },
    item: {
        flex: 1,
        height: "100%",
        overflow: "hidden",
        // aspectRatio: "4/3"
        "& > img": {
            // width: "100%",
            height: "100%"
        }
    },
    "@media (max-width: 1280px)": {
        container: {
            display: 'flex',
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            height: "555px"
        },

    },
    "@media (max-width: 690px)": {
        container: {
            flexDirection: "column",

            height: "auto",
        },


    },
}))
const Image2 = ({ src }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.largeImage}>
                <img src={src[0]} alt='' />
            </div>
            <div className={classes.smallImage}>
                <div className={classes.item}>
                    <img src={src[1]} alt='' />
                </div>
                <div className={classes.item}>
                    <img src={src[2]} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Image2