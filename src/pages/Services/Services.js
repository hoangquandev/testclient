import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../../common/Footer";
import Banner from "./Banner";
import Differents from "./Differents";
import DropAndDrag from "./DropAndDrag";

const useStyles = makeStyles((theme) => ({
  mobile: {
    display: "none"
  },
  desktop: {
    display: "block"
  },
  "@media (max-width: 640px)": {
    mobile: {
      display: "block",
      padding: "0 1rem"
    },
    desktop: {
      display: "none"
    }
  }
}))
const Services = () => {
  const classes = useStyles()
  const lang = useSelector((state) => state.lang.lang)
  const [loading, setLoading] = useState(true)
  return <div style={{ overflow: "hidden" }}>
    <Banner setLoading={setLoading} />

    {!loading && <>
      <Differents />
      <div className={classes.desktop}>
        <h2 style={{ textAlign: "center", fontFamily: "Times New Roman", fontSize: "40px", fontWeight: "normal", fontStyle: "italic" }}>{lang ? "Bộ Thiết Bị" : "Equipments"}</h2>

      </div>
      <DropAndDrag />
      <Footer />
    </>}
  </div>;
};

export default Services;
