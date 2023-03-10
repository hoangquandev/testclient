import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import History from "../../components/aboutUs/History";
import BottomBar from "../../common/BottomBar";
import FooterWhite from "../../common/FooterWhite";
import Footer from "../../common/Footer";
import { listImageAboutUs } from "../../utils/imageAboutUs";
// import banner from "../../assets/images/aboutUs/Aboutus-Banner.png"
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  footerDiv: {
    backgroundImage: `url(${listImageAboutUs[7]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "50px",
  },
  banner: {
    height: "calc(100vh - 124px)",
    width: "100%",

    backgroundSize: "cover",
  },
  "@media (max-width: 640px)": {
    banner: {
      display: "none",
    },
    footerDiv: {
      background: "transparent",
    },
  },
}));
const AboutUs = () => {
  const [bannerAbout, setbannerAbout] = useState("");
  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );

        setbannerAbout(res.data.bannerAbout);
      } catch (error) {
        // dispatch(getProjectListError());
      }
    };
    getDetailApi();
  }, []);
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  const viewPort = useViewport();
  const isMobile = viewPort.width <= 640;
  const classes = useStyles();
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className={classes.banner}
        style={{ background: `url(${bannerAbout}) no-repeat center` }}
      >
        {/* <img src={banner} alt="banner" /> */}
      </div>
      <History />
      <div className={classes.footerDiv}>
        <div style={isMobile ? null : { height: "591px" }}></div>
        {isMobile ? <Footer /> : <FooterWhite />}
        <BottomBar />
      </div>
    </div>
  );
};

export default AboutUs;
