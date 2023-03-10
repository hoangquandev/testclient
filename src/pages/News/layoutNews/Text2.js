import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px"
    },
    image: {
        flex: 1
    },
    text: {
        flex: 2,
        textAlign: 'justify'
    },
    "@media (max-width: 1280px)": {
        container: {
            flexDirection: "column"
        },

    },
}))
const Text2 = ({ text, src }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src={src} alt='' />
            </div>
            <div className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    )
}

export default Text2