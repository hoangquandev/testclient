import { makeStyles } from '@mui/styles'
import React from 'react'
import ArrowIconNext from './ArrowIconNext'


const useStyles = makeStyles((theme) => ({
    left: {
        transform: 'rotate(180deg)'
    },
    container: {
        display: 'flex',
        gap: "8px"
    }

}))
const XIcon = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.left}><ArrowIconNext /></div>
            <div><ArrowIconNext /></div>
        </div>
    )
}

export default XIcon