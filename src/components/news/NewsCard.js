import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    card: {
        fontStyle: "italic",
        cursor: "pointer",
        "&:hover h2": {
            color: "#fe5600",

        },
        "&:hover img": {
            filter: "none"
        }
    },
    image: {
        width: "100%", filter: "grayScale(100%)"
    },
    time: {
        borderBottom: "1px solid",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        fontSize: "14px"
    },
    "@media (max-width: 640px)": {
        card: {
            fontStyle: "italic",
            cursor: "pointer",
            "&:hover h2": {
                color: "#fe5600",

            },
            "&:hover img": {
                filter: "none"
            }
        },
        image: {
            filter: "none"
        },
        time: {
            borderBottom: "1px solid",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            fontSize: "14px"
        },
    }
}))
const NewsCard = ({ img, time, name, fontSize, index }) => {
    const classes = useStyles()
    return (
        <div className={classes.card} data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}>
            <div >
                <img className={classes.image} src={img} alt="" />
            </div>
            <p className={classes.time}>{time}</p>
            <h2 style={{ fontSize: fontSize, paddingTop: "0.5rem" }}>{name}</h2>
        </div>
    )
}

export default NewsCard