import { makeStyles } from '@mui/styles'
import React from 'react'
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        aspectRatio: "16/9"
    }
}))
const Youtube1 = ({ link }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <ReactPlayer url={link} width="100%" height="100%" controls={true} />
        </div>
    )
}

export default Youtube1