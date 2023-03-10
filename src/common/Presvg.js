import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyles = makeStyles((theme) => ({
    changeHover: {
        cursor: "pointer",
        "&:hover": {
            stroke: "#fe5600"
        }
    }
}))
const Presvg = () => {
    const classes = useStyles()
    return (
        <svg id="Layer_1" className={classes.changeHover} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#231f20;}" }} /></defs><path className="cls-1" d="M19.19,24.2a1.32,1.32,0,0,0-.57.12L10.27,16a.48.48,0,0,0-.68.68L17.94,25a1.32,1.32,0,0,0-.12.57,1.37,1.37,0,1,0,1.37-1.37Z" /><path className="cls-1" d="M9.92,14.18a.49.49,0,0,0,.34-.14l8.36-8.36a1.32,1.32,0,0,0,.57.12,1.37,1.37,0,1,0-1.37-1.37,1.32,1.32,0,0,0,.12.57L9.58,13.36a.5.5,0,0,0,0,.68A.51.51,0,0,0,9.92,14.18Z" /></svg>
    )
}

export default Presvg