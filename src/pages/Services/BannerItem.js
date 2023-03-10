import { makeStyles } from '@mui/styles'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        height: "calc(100vh - 300px)",
        width: "1280px",
        margin: "0 auto",
        // background: "#ccc",
        display: 'flex',
        alignItems: "center",

    },
    content: {
        height: "calc(100vh - 370px)",
        width: "100%",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // position: "relative"
    },
    left: {

        width: "30%",
        aspectRatio: "1/1",
        // background: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
    },
    right: {

        width: "30%",
        aspectRatio: "1/1",
        // background: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
    },
    center: {
        width: "40%",
        zIndex: 10,
        // position: "absolute",
        // left: "50%",
        // transform: "translateX(-50%)",
        borderRadius: "10px",
    },
    number: {
        position: "absolute",
        fontSize: "300px",
        fontFamily: "Times New Roman",
        color: "#ddd",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    },
    title: {
        position: "absolute",
        fontFamily: "Times New Roman",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center"
    },
    contentMobile: {
        display: "none"
    },
    "@media (max-width: 1024px)": {
        container: {
            height: "calc(100vh - 300px)",
            width: "100%",
            margin: "0 auto",
            // background: "#ccc",
            display: 'flex',
            alignItems: "center",

        },
        content: {
            height: "calc(100vh - 370px)",
            width: "100%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // position: "relative"
        },
        left: {

            width: "30%",
            aspectRatio: "1/1",
            // background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
        },
        right: {

            width: "30%",
            aspectRatio: "1/1",
            // background: "yellow",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        },
        center: {
            width: "40%",
            zIndex: 10,
            // position: "absolute",
            // left: "50%",
            // transform: "translateX(-50%)",
            borderRadius: "10px",
        },
        number: {
            position: "absolute",
            fontSize: "300px",
            fontFamily: "Times New Roman",
            color: "#ddd",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        },
        title: {
            position: "absolute",
            fontFamily: "Times New Roman",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center"
        },
        contentMobile: {
            display: "none"
        },
    },
    "@media (max-width: 640px)": {
        container: {
            width: "100vw",
            height: "auto"
        },
        contentMobile: {
            display: "block",
            width: "100%",

        },
        content: {
            display: "none"
        }
    }
}))
const BannerItem = ({ image, item, index }) => {
    const classes = useStyles()
    const lang = useSelector((state) => state.lang.lang)
    return (
        <div className={classes.container}

        >
            <div className={classes.content}>
                <div className={classes.left}
                    data-aos="fade-left"
                    data-aos-easing="ease"
                    data-aos-duration="1300"
                >
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                        <h1 className={classes.number}>{index + 1}</h1>
                        <div className={classes.title}>
                            {/* {
                                item.title ?
                                    <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "10px" }}>{lang ? item.vititle : item.title}</h2>
                                    :
                                    <>
                                        <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "10px" }}>{lang ? item.vititle1 : item.title1}</h2>
                                        <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "10px" }}>{lang ? item.vititle2 : item.title2}</h2>
                                    </>
                            } */}
                            <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: lang ? item.viTitle : item.title }} />
                            <p>
                                <Link to="/projects">{lang ? "Xem thêm dự án" : "See our project"}</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.center}>
                    <img style={{ height: "100%", filter: "brightness(0.75)", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset" }} src={image.src} alt="" />
                </div>
                <div className={classes.right}
                    data-aos="fade-right"
                    data-aos-easing="ease"
                    data-aos-duration="1300"
                >
                    <p style={{ textAlign: "justify", marginLeft: "20px", marginRight: "20px" }} dangerouslySetInnerHTML={{ __html: lang ? item.viDescription : item.description }} />
                    {/* {lang ? item.videscription : item.description} */}

                </div>
            </div>
            <div className={classes.contentMobile}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", background: `url(${image.src}) no-repeat center` }} >
                    <h1 className={classes.number}>{item.id}</h1>
                    <div className={classes.title}>
                        {/* {
                            item.title ?
                                <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "10px" }}>{lang ? item.vititle : item.title}</h2>
                                :
                                <>
                                    <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px" }}>{lang ? item.vititle1 : item.title1}</h2>
                                    <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "10px" }}>{lang ? item.vititle2 : item.title2}</h2>
                                </>
                        } */}
                        <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: lang ? item.viTitle : item.title }} />

                    </div>
                </div>
                <div>
                    {/* {
                        item.title ?
                            <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "1rem", fontWeight: "normal", fontStyle: "italic", textAlign: "center", marginTop: "2rem" }}>{lang ? item.vititle : item.title}</h2>
                            :
                            <>
                                <h2 style={{ color: '#fe5600', fontSize: "24px", fontWeight: "normal", fontStyle: "italic", textAlign: "center", marginTop: "2rem" }}>{lang ? item.vititle1 : item.title1}</h2>
                                <h2 style={{ color: '#fe5600', fontSize: "24px", marginBottom: "1rem", fontWeight: "normal", fontStyle: "italic", textAlign: "center" }}>{lang ? item.vititle2 : item.title2}</h2>
                            </>
                    } */}
                    <h2 style={{ color: '#fe5600', lineHeight: "30px", fontSize: "24px", marginBottom: "1rem", fontWeight: "normal", fontStyle: "italic", textAlign: "center", marginTop: "2rem" }} dangerouslySetInnerHTML={{ __html: lang ? item.viTitle : item.title }} />
                    <p style={{ textAlign: "justify", marginLeft: "20px", marginRight: "20px" }} dangerouslySetInnerHTML={{ __html: lang ? item.viDescription : item.description }} />

                    <p style={{ textAlign: "center" }}>
                        <Link to="/projects" style={{ color: "#fe5600", fontStyle: "italic" }}>{lang ? "Xem thêm dự án" : "See our project"}</Link>
                    </p>
                </div>
            </div>
        </div >
    )
}

export default BannerItem