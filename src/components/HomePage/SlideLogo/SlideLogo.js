import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    margin: "0 auto",
  },
  container: {
    maxWidth: "100%",
    width: "1330px",
    margin: "0 auto",
    marginBottom: "3rem",
  },
  "@media (max-width: 1024px)": {
    container: {
      padding: "10px 100px",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      padding: "0 24px",
    },
  },
}));
const SlideLogo = () => {
  const classes = useStyles();
  let [logoClient, setLogoClient] = useState([]);
  const url = "http://themoderntouch.co:8000/v1";
  useEffect(() => {
    axios.get(`${url}/logoClient`).then((response) => {
      setLogoClient(response.data);
      // console.log(response.data);
    });
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
  const isMobile = viewPort.width <= 1024;

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
  };
  if (isMobile) {
    return (
      <Slider className={classes.container} {...settings}>
        {logoClient.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.srcMobile} alt="" style={{ maxWidth: "100%" }} />
            </div>
          );
        })}
      </Slider>
    );
  }
  return (
    <div className={classes.mainContainer}>
      <Slider className={classes.container} {...settings}>
        {logoClient.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.src} alt="" style={{ maxWidth: "100%" }} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlideLogo;
