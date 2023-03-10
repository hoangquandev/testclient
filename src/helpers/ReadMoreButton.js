import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "transparent",
    borderRadius: "30px",
    padding: "4px 50px",
    border: "1px solid #fe5600",
    cursor: "pointer",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
    fontSize: "16px",
  },
}));

const ReadMoreButton = ({ id }) => {
  const classes = useStyles();

  return (
    <Link to={`/projects/${id}`}>
      <button className={classes.button}>Read More</button>
    </Link>
  );
};

export default ReadMoreButton;
