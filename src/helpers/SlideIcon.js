import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  icon: {
    border: "0px solid #ccc",
    height: "2px",
    background: "#ccc",
    width: "14px",
  },
  iconHover: {
    border: "0px solid #fe5600",
    height: "2px",
    background: "#fe5600",
    width: "14px",
  },
  dot: {
    backgroundColor: "#ccc",
    borderRadius: "50%",
    width: 6,
    height: 6,
    position: "absolute",
    left: "-6px",
    top: "-2px",
  },
  dotHover: {
    backgroundColor: "#fe5600",
    borderRadius: "50%",
    width: 6,
    height: 6,
    position: "absolute",
    left: "-6px",
    top: "-2px",
  },
  "@media (max-width: 1024px)": {
    container: {
      position: "relative",
    },
    icon: {
      border: "0px solid #ccc",
      height: "2px",
      background: "#ccc",
      width: "12px",
    },
    iconHover: {
      border: "0px solid #fe5600",
      height: "2px",
      background: "#fe5600",
      width: "12px",
    },
    dot: {
      backgroundColor: "#ccc",
      borderRadius: "50%",
      width: 4,
      height: 4,
      position: "absolute",
      left: "-3px",
      top: "-1px",
    },
    dotHover: {
      backgroundColor: "#fe5600",
      borderRadius: "50%",
      width: 4,
      height: 4,
      position: "absolute",
      left: "-3px",
      top: "-1px",
    },
  },
}));

const SlideIcon = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={props.hover ? classes.iconHover : classes.icon}></div>
      <div className={props.hover ? classes.dotHover : classes.dot}></div>
    </div>
  );
};

export default SlideIcon;
