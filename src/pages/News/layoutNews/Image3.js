import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        gap: 10
    },
    item: {
        width: "100%",
        "& >img": {
            width: "100%",
            aspectRatio: "4/3"
        }

    },
    "@media (max-width: 1280px)": {
        container: {
            flexDirection: "column"
        },

    },
}))
const Image3 = ({ src }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.item}>
                <img src={src[0]} alt='' />
            </div>
            <div className={classes.item}>
                <img src={src[1]} alt='' />
            </div>

        </div>
    )
}

export default Image3