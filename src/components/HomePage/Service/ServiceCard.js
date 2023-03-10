import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import imgService from "../../../assets/images/services/service-1.png";


const useStyles = makeStyles((theme) => ({
  container: {
    height: 300,
    overflow: "hidden",
    position: "relative",
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    borderRadius: "10px",
    cursor: "pointer"
  },
  card: {
    height: "300px",
    position: "relative",
    // backgroundImage: `url(${imgService})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transition: "all 1s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  number: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "200px",
    textAlign: "center",
    fontSize: "5rem",
    color: "#fe5600",
  },
  titleCard: {
    borderBottom: "1px solid",
    position: "absolute",
    top: "82%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "14px",
    lineHeight: "20px",
    paddingBottom: "8px",
    color: "#fff",
    "& *": {
      width: "250px",
    },
  },
  border: {
    borderBottom: "3px solid",
    width: "20%",
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%,-20%)",
    borderRadius: "20px",
  },
  "@media (max-width: 1024px)": {
    container: {
      height: 240,
      overflow: "hidden",
      position: "relative",
      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      borderRadius: "10px",
    },
    card: {
      height: "240px",
      position: "relative",
      transition: "all 1s",
      "&:hover": {
        color: "#fff",
        backgroundImage: `url(${imgService})`,
        transform: "scale(1.1)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "all 1s",
      },
    },
    number: {
      position: "absolute",
      top: "70%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      height: "200px",
      textAlign: "center",
      fontSize: "4rem",
    },
    titleCard: {
      borderBottom: "1px solid",
      position: "absolute",
      top: "78%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontSize: "12px",
      lineHeight: "16px",
      paddingBottom: "8px",

      "& *": {
        width: "200px",
      },
    },
    border: {
      borderBottom: "3px solid",
      width: "20%",
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translate(-50%,-20%)",
      borderRadius: "20px",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      height: 100,
    },
    card: {
      height: "100px",
    },
    number: {
      top: "62%",
      left: "16%",
      transform: "translate(-50%,-50%)",
      height: "100px",
      textAlign: "center",
      fontSize: "4rem",
    },
    titleCard: {
      top: "40%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      fontSize: "10px",
      lineHeight: "20px",
      paddingBottom: "8px",
      "& *": {
        width: "250px",
      },
      border: "none",
    },
    border: {
      display: "none",
    },
  },
}));

const ServiceCard = ({ service, index }) => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang)
  return (
    <div className={classes.container}>
      <Link to='services'>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={classes.card}
          style={{ backgroundImage: `linear-gradient(black,black),url(${service.src})`, backgroundBlendMode: 'saturation' }}
        >
          <h1 className={classes.number}>{index}</h1>
          <div className={classes.titleCard}>
            <h3 dangerouslySetInnerHTML={{ __html: lang ? service.viTitle : service.title }} />
            <div className={classes.border}></div>
          </div>
        </Stack>
      </Link>
    </div>
  );
};

export default ServiceCard;
