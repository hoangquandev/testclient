import { makeStyles } from '@mui/styles';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        borderTop: "1px solid",
        gap: "26px",
        paddingTop: "1rem",
        paddingBottom: "1rem"
    },
    name: {
        flex: "0 0 25%",
        maxWidth: "0 0 25%",

        fontStyle: "italic",
        fontSize: "12px",
        "&:hover": {
            color: "#fe5600"
        }
    },
    detail: {
        position: "relative",
        flex: "0 0 75%",
        maxWidth: "0 0 75%",
        "& h4": {
            fontStyle: "italic",
            fontSize: "18px"
        },
        "& li": {
            listStyle: "unset"
        }

    },
    arrow: {
        position: "absolute",
        right: "10px",
        top: "-2px",
        cursor: "pointer"
    },
    list: {
        paddingBottom: "0.5rem", paddingTop: "0.5rem",
        fontSize: "16px"
    },
    hide: {
        // overflow: "hidden",
        // transition: "1s ease-in-out",
        // height: "0"
    },
    "@media (max-width: 640px)": {
        container: {
            display: 'flex',
            borderTop: "1px solid",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            flexWrap: "wrap",
            margin: "0 1rem"
        },
        name: {
            flex: "0 0 100%",
            maxWidth: "0 0 100%",

            fontStyle: "italic",
            fontSize: "12px",
            "&:hover": {
                color: "#fe5600"
            }
        },
        detail: {
            position: "relative",
            flex: "0 0 100%",
            maxWidth: "0 0 100%",
            "& h4": {
                fontStyle: "italic",
                fontSize: "18px"
            }

        },
        arrow: {
            position: "absolute",
            right: "10px",
            top: "-22px",
            cursor: "pointer"
        },
        list: {
            paddingBottom: "0.5rem", paddingTop: "0.5rem",
            fontSize: "16px"
        },
    }
}))
const JobDirect = ({ job }) => {
    const classes = useStyles()
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    const lang = useSelector(state => state.lang.lang)
    return (
        <div className={classes.container}>
            <div className={classes.name} >
                <h2 style={show ? { color: "#fe5600", cursor: "pointer" } : { cursor: "pointer" }} onClick={handleShow}>
                    {job.job}
                </h2>

            </div>
            <div className={classes.detail} >
                <div className={classes.hide} style={show ? null : { display: "none" }}>
                    <h4 >{lang ? "Mô tả công việc" : "Job Description"}:</h4>
                    <div style={{ marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: lang ? job.videscription : job.description }} />
                    {/* <ul className={classes.list}>
                        {jobDesc.map((item, key) => {
                            return (
                                <li key={key}>
                                    - {item}
                                </li>
                            )
                        })}
                    </ul> */}
                    <h4>{lang ? "Yêu cầu công việc" : "Job Requirements"}:</h4>
                    <div style={{ marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: lang ? job.virequirement : job.requirement }} />
                    <h4>{lang ? "Quyền lợi được hưởng" : "Benefits"}:</h4>
                    <div style={{ marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: lang ? job.vibenefit : job.benefit }} />
                    {/* <ul className={classes.list}>
                        {jobRequire.map((item, key) => {
                            return (
                                <li key={key}>
                                    - {item}
                                </li>
                            )
                        })}
                    </ul> */}
                    <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} >
                        <Link to={job._id} style={{ border: "none", backgroundColor: "#fe5600", borderRadius: "20px", padding: "6px 26px", color: "white", fontStyle: "italic" }} >{lang ? "Ứng tuyển" : "Apply Now"}</Link>
                    </div>
                </div>
                <div style={show ? { color: "#fe5600", cursor: "pointer" } : { cursor: "pointer" }} className={classes.arrow} onClick={handleShow}>{show ? <ExpandMoreIcon /> : <ExpandLessIcon />}</div>
            </div>
        </div>
    )
}

export default JobDirect