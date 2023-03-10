import { makeStyles } from '@mui/styles'
import React from 'react'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "140px",
        borderRadius: "8px",
        position: "relative",

        flex: 1,
        "&:hover": {
            cursor: "pointer"
        },
        "&::before": {
            content: "''",
            position: "absolute",
            bottom: "14px",
            left: "50%",
            transform: "translateX(-50%)",
            borderBottom: "1px solid white",
            width: "80%"
        },
        "&::after": {
            content: "''",
            position: "absolute",
            bottom: "13px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "3px",
            width: "40%",
            backgroundColor: "white",
            borderRadius: "4px"
        },

    },
    number: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        color: "white",
        fontSize: "30px"
    },
    title: {
        width: "80%",
        fontSize: "5px",
        color: "white",
        textAlign: "center",
        position: "absolute",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        "& h2": {
            textAlign: "center"
        }
    },
    "@media (max-width: 640px)": {
        container: {
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            position: "relative",

            flex: 1,
            "&:hover": {
                cursor: "pointer"
            },
            "&::before": {
                display: 'none'
            },
            "&::after": {
                display: "none"
            },

        },
        number: {
            display: "none"
        },
        title: {
            display: "none"
        },
    }
}))
const ItemService = ({ image, item, indexActive, index }) => {
    const classes = useStyles()
    const lang = useSelector((state) => state.lang.lang)
    return (
        <div
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
            className={classes.container} style={(indexActive) === index ? { backgroundImage: `url(${image.src})` } : { filter: "brightness(0.85) grayScale(1)", backgroundImage: `url(${image.src})` }}>
            <div className={classes.number} style={(indexActive) === index ? { color: "#fe5600" } : null}>
                <h1>{index}</h1>
            </div>
            <div className={classes.title}>
                {/* {
                    item.title ?
                        <h1>{lang ? item.vititle : item.title}</h1>
                        :
                        (
                            <>
                                <h1>{lang ? item.vititle1 : item.title1}</h1>
                                <h1>{lang ? item.vititle2 : item.title2}</h1>
                            </>
                        )
                } */}
                <h1 dangerouslySetInnerHTML={{ __html: lang ? item.viTitle : item.title }} />
            </div>
        </div>
    )
}

export default ItemService