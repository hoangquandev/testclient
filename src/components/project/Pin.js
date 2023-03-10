import { makeStyles } from '@mui/styles'
import { height } from '@mui/system'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    pin: {
        margin: '5px 5px',
        padding: 0,
        borderRadius: "10px",
        backgroundColor: "red"
    },

}))
const Pin = (props) => {
    const classes = useStyles()
    const { height, width, src } = props
    return (
        <div className={classes.pin} style={{ gridRowEnd: height, gridColumnEnd: width }} >
            <img style={{ width: '100%', borderRadius: "10px", }} src={src} alt='' />
        </div>
    )
}

export default Pin