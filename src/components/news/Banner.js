import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import banner from "../../assets/images/News/bannernews.png";
import textImage from "../../assets/images/News/textnewandevent.png";

const useStyles = makeStyles((theme) => ({
  banner: {
    // backgroundColor: "#fe5600",
    height: "calc(100vh - 100px)",

    backgroundSize: "cover",
    position: "relative",
  },
  imageText: {
    position: "absolute",
    bottom: "10%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  description: {
    position: "absolute",
    bottom: "2%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  "@media (max-width: 640px)": {
    banner: {
      height: "500px",
      background: `url(${banner})`,
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
      position: "relative",
    },
    imageText: {
      position: "absolute",
      top: "30%",
      left: "50%",
      transform: "translateX(-50%)",
    },
    description: {
      position: "absolute",
      top: "60%",
      left: "50%",
      transform: "translateX(-50%)",
      textAlign: "center",
    },
  },
}));
const Banner = () => {
  const classes = useStyles();
  const [bannerNews, setBannerNews] = useState("");
  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );

        setBannerNews(res.data.bannerNews);
      } catch (error) {
        // dispatch(getProjectListError());
      }
    };
    getDetailApi();
  }, []);
  return (
    <div
      className={classes.banner}
      style={{
        background: `url(${banner}) center center`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={classes.imageText}>
        <img src={textImage} alt="text" />
      </div>
      <div className={classes.description}>
        {/* <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</p> */}
      </div>
    </div>
  );
};

export default Banner;
