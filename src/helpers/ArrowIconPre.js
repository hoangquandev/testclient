import { makeStyles } from "@mui/styles";
import React from "react";
import SlideIcon from "./SlideIcon";

const useStyles = makeStyles((theme) => ({
  top: {
    transform: "rotate(45deg)",
  },
  bottom: {
    transform: "rotate(-45deg)",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  "@media (max-width: 1024px)": {
    container: { gap: "10px" },
  },
}));

const ArrowIconPre = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        {" "}
        <SlideIcon hover={props.isShown} />
      </div>
      <div className={classes.bottom}>
        <SlideIcon hover={props.isShown} />
      </div>
    </div>
  );
};

export default ArrowIconPre;
