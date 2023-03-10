import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        aspectRatio: "16/9",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        "&>img": {
            width: "100%"
        }
    }
}))
const Image1 = ({ src }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <img src={src} alt='' />
        </div>
    )
}

export default Image1