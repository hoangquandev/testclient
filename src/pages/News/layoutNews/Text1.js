import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: "justify"
    }
}))
const Text1 = ({ text }) => {
    const classes = useStyles()
    return (
        <div className={classes.container} dangerouslySetInnerHTML={{ __html: text }} />
    )
}

export default Text1