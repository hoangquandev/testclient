import { makeStyles } from '@mui/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {


        "&:hover img": {

            filter: "none",
            transform: "scale(1.07)"
        },
        "&:hover h2": {
            color: "#fe5600"
        },
        "&:hover": {

        }

    },
    image: {
        overflow: "hidden", height: "380px"
    },
    img: {
        filter: "grayScale(100%)",
        transition: "transform 0.7s ease",
    },
    sub: {
        display: "flex",
        justifyContent: "space-between",
        fontStyle: "italic",
        borderBottom: "1px solid",
        paddingTop: "6px",
        paddingBottom: "6px",
    },
    title: {
        fontStyle: "italic",
        paddingTop: "8px",
        fontSize: "14px",
    },
    "@media (max-width: 640px)": {
        container: {


            "&:hover img": {

                filter: "none",
                transform: "scale(1.07)"
            },
            "&:hover h2": {
                color: "#fe5600"
            },
            "&:hover": {

            }

        },
        image: {
            overflow: "hidden", height: "240px"
        },
        img: {
            filter: "none",
            transition: "transform 0.7s ease",
        },
        sub: {
            display: "flex",
            justifyContent: "space-between",
            fontStyle: "italic",
            borderBottom: "1px solid",
            paddingTop: "6px",
            paddingBottom: "6px",
            fontSize: "10px"
        },
        title: {
            fontStyle: "italic",
            paddingTop: "8px",
            fontSize: "10px",
        },
    }
}))
const ProjectCard = ({ imgProject, timeProject, styleProject, nameProject, path, index }) => {
    const classes = useStyles()
    const lang = useSelector((state) => state.lang.lang)
    return (
        <Link to={path}>
            <div className={classes.container} data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="1300"
                data-aos-delay={0}>
                <div className={classes.image} style={{}}>
                    <img className={classes.img} src={imgProject} alt="" />
                </div>
                <div className={classes.sub}>
                    <p>
                        {timeProject}
                    </p>
                    <p>{styleProject}</p>
                </div>
                <div className={classes.title}>
                    <h2>{nameProject}</h2>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard