import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import thumbnailImg from "../../../assets/images/thumbnailProject/diamond-1.png";
import image1 from "../../../assets/images/ProjectsData/diamond-2.png";
import image2 from "../../../assets/images/ProjectsData/diamond-3.png";
import image3 from "../../../assets/images/ProjectsData/diamond-4.png";

import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    image: {
        borderRadius: "10px",
        maxWidth: "100%",
    },
    thumbnail: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    selectList: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
    },
    itemSelect: {
        margin: "0 10px",
        cursor: "pointer",
    },
    description: {
        height: "65px",
        whiteSpace: "pre-line",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "16px"
    },
    square: {
        verticalAlign: "super",
        fontSize: "9px"
    },
    client: {
        textAlign: "right"
    },
    number: {
        textAlign: "right"
    }

}));

const SelectedItem = (props) => {
    const classes = useStyles();
    const index = props.index;
    // const projectList = [
    //     {
    //         name: "DIAMOND VILLA",
    //         widthImage: "100%",
    //         thumbnailImage: thumbnailImg1,
    //         images: [image4, image5, image6],
    //         description: `Seen from the outside, this project stands out with its impressive design and luxurious diamond shape, featuring an image of bare concrete and glass materials to bring simple but really high class to the owner. In addition, the design highlight is the "bedroom in the clouds" which brings a very new and special experience.`,
    //         client: `MR. ALAN LUCAS & MRS. HIEN LUCAS`,
    //         location: `District 2, Ho Chi Minh`,
    //         lotArea: 750,
    //         conArea: '1,200',
    //         pool: 60,
    //         height: 14,
    //         number: '3 Stories + 1 Basement',
    //         style: "Modern",
    //     },

    // ];

    return (
        <div

        >
            <Grid container spacing={2} style={{ padding: "0 30px" }}>
                <Grid
                    item
                    xs={6}
                    className={classes.thumbnail}
                    style={{
                        backgroundImage: `url(${thumbnailImg})`,
                        backgroundSize: '100%',
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"

                    }}
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                >

                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid
                                    item
                                    xs={8}

                                >
                                    <div data-aos="fade-up"
                                        data-aos-easing="ease"
                                        data-aos-duration="1000">
                                        <img
                                            src={image1}
                                            className={classes.image}
                                            alt=""

                                        />
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}

                                >
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <img
                                                src={image2}
                                                className={classes.image}
                                                alt=""
                                                data-aos="fade-up"
                                                data-aos-easing="ease"
                                                data-aos-duration="1000"
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}

                                        >
                                            <img
                                                src={image3}
                                                className={classes.image}
                                                alt=""
                                                data-aos="fade-up"
                                                data-aos-easing="ease"
                                                data-aos-duration="1000"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                                container
                                spacing={1.8}
                                style={{ fontSize: "11px", fontStyle: "italic" }}
                            >
                                <Grid
                                    item
                                    xs={4}
                                    style={{ fontSize: "11px", textAlign: "justify" }}
                                >
                                    <div
                                        style={{ height: "150px" }}
                                        data-aos="fade-up"
                                        data-aos-easing="ease"
                                        data-aos-duration="1000"
                                        data-aos-delay="200"
                                    >
                                        <h3 style={{ textAlign: "left" }}>DIAMOND VILLA</h3>
                                        <p className={classes.description}>"Seen from the outside, this project stands out with its impressive design and luxurious diamond shape, featuring an image of bare concrete and glass materials to bring simple but really high class to the owner. In addition, the design highlight is the "bedroom in the clouds" which brings a very new and special experience.</p>
                                        <Link to='/projects/1' style={{ color: "#fe5600", fontStyle: "italic", fontSize: "13px" }}> Read more ...</Link>

                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    style={{ fontSize: "11px" }}
                                    data-aos="fade-up"
                                    data-aos-easing="ease"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            lineHeight: "16px",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <p>Client:</p>
                                        <b className={classes.client}>MR. ALAN LUCAS<br />& MRS. HIEN LUCAS </b>
                                    </div>

                                    <div
                                        style={{
                                            display: "flex",
                                            lineHeight: "16px",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>Location:</div>
                                        <b>District 2, Ho Chi Minh</b>
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    style={{ fontSize: "12px" }}
                                    data-aos="fade-up"
                                    data-aos-easing="ease"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            lineHeight: "16px",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>Lot area:</div>
                                        <b>
                                            750 m
                                            <span className={classes.square} >2</span>
                                        </b>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            lineHeight: "16px",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>Construction area:</div>
                                        <b>
                                            1,200 m
                                            <span className={classes.square} >2</span>
                                        </b>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            lineHeight: "16px",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>Public area:</div>
                                        <b>
                                            60 m
                                            <span className={classes.square} >2</span>
                                        </b>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            lineHeight: "16px",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>Stories:</div>
                                        <b className={classes.number}>3 Stories + 1 Basement</b>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            lineHeight: "22px",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>Style:</div>
                                        <b>Modern</b>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default SelectedItem;
