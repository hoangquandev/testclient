import { makeStyles } from '@mui/styles'
import React from 'react'
import Pin from './Pin'
import img1 from '../../assets/images/Diamond-image/72ppi/Artboard 2.png'
import img2 from '../../assets/images/Diamond-image/72ppi/Artboard 3.png'
import img3 from '../../assets/images/Diamond-image/72ppi/Artboard 4.png'
import img4 from '../../assets/images/Diamond-image/72ppi/Artboard 5.png'
import img5 from '../../assets/images/Diamond-image/72ppi/Artboard 6.png'
import img6 from '../../assets/images/Diamond-image/72ppi/Artboard 7.png'
import img7 from '../../assets/images/Diamond-image/72ppi/Artboard 8.png'
import img8 from '../../assets/images/Diamond-image/72ppi/Artboard 9.png'
import img9 from '../../assets/images/Diamond-image/72ppi/Artboard 10.png'
import img10 from '../../assets/images/Diamond-image/72ppi/Artboard 11.png'
import img11 from '../../assets/images/Diamond-image/72ppi/Artboard 12.png'

const useStyles = makeStyles((theme) => ({
    container: {
        margin: 0,
        padding: 0,
        paddingTop: "2rem",
        width: "100vw",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,250px)",
        gridAutoRows: "10px",
        justifyContent: "center"
    }
}))
const PinterestLayout = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Pin width="auto" height='auto' src={img1} />
            <Pin width="auto" height='auto' src={img2} />
            <Pin width="auto" height='auto' src={img3} />
            <Pin width="auto" height='auto' src={img4} />
            <Pin width="auto" height='auto' src={img5} />
            <Pin width="auto" height='auto' src={img6} />
            <Pin width="auto" height='auto' src={img7} />
            <Pin width="auto" height='auto' src={img8} />
            <Pin width="auto" height='auto' src={img9} />
            <Pin width="auto" height='auto' src={img10} />
            <Pin width="auto" height='auto' src={img11} />
            <Pin width="auto" height='auto' src={img10} />
            <Pin width="auto" height='auto' src={img11} />
            <Pin width="auto" height='auto' src={img1} />
            <Pin width="auto" height='auto' src={img1} />
            <Pin width="auto" height='auto' src={img1} />
            <Pin width="auto" height='auto' src={img1} />
            <Pin width="auto" height='auto' src={img1} />
            <Pin width="auto" height='auto' src={img1} />
        </div>
    )
}

export default PinterestLayout