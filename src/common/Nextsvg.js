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
const Nextsvg = () => {
    const classes = useStyles()
    return (
        <svg id="Layer_1" className={classes.changeHover} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#231f20;}" }} /></defs><path className="cls-1" d="M10.81,24.2a1.32,1.32,0,0,1,.57.12L19.73,16a.48.48,0,0,1,.68.68L12.06,25a1.32,1.32,0,0,1,.12.57,1.37,1.37,0,1,1-1.37-1.37Z" /><path className="cls-1" d="M20.08,14.18a.49.49,0,0,1-.34-.14L11.38,5.68a1.32,1.32,0,0,1-.57.12,1.37,1.37,0,1,1,1.37-1.37,1.32,1.32,0,0,1-.12.57l8.36,8.36a.5.5,0,0,1,0,.68A.51.51,0,0,1,20.08,14.18Z" /></svg>

    )
}

export default Nextsvg