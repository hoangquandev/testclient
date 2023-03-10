import { makeStyles } from "@mui/styles";
import React from "react";
import SlideIcon from "./SlideIcon";

const useStyles = makeStyles((theme) => ({
  top: {
    transform: "rotate(135deg)",
  },
  bottom: {
    transform: "rotate(-135deg)",
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

const ArrowIconNext = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <SlideIcon hover={props.isShownNext} />
      </div>
      <div className={classes.bottom}>
        <SlideIcon hover={props.isShownNext} />
      </div>
    </div>
  );
};

export default ArrowIconNext;
