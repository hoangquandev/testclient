import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Hawaii from "./Slider/Hawaii";
import Maps from "./Slider/Maps";
import VietNam from "./Slider/VietNam";
import arrow from "../../assets/images/slider/SLIDER-08.png";
import backgroundImage from "../../assets/images/slider/background.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  sliderSection: {
    width: "100vw",
    overflow: "hidden",
    position: "relative",
    padding: "0 8px",
  },
  background: {
    width: "100vw",
    margin: "0 auto",
    marginBottom: "10rem",
    backgroundSize: "120%",
    transition: "transform 1s ease",
  },
  container: {
    maxWidth: "100%",
    width: "100vw",
    height: "781px",
    margin: "4rem auto",
    position: "relative",
    transition: "transform 1s ease",
    backgroundColor: "#fff",
    padding: "0 40px",
  },

  callToAction: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.7s ease",
    height: 100,
    "&:hover": {
      height: "150px",
      transition: "all 0.7s ease",
      "& *": {
        "&:nth-child(2)": {
          width: 600,
          transition: "all 0.7s ease",
        },
      },
    },
  },
  img: {
    width: 300,
    margin: "auto",
  },
  textH6: {
    fontSize: "16px",
    fontFamily: "TimesNewRomanItalic",
  },
  textH2: {
    fontSize: "40px",
    marginTop: "-20px",
  },
  image: {
    maxWidth: "100%",
  },
  "@media (max-width: 1600px)": {
    container: {
      height: "600px",
    },
    callToAction: {
      top: "50%",
    },
  },
  "@media (max-width: 1280px)": {
    container: {
      height: "480px",
    },
    callToAction: {
      top: "50%",
    },
  },
  "@media (max-width: 1024px)": {
    container: {
      height: "400px",
      padding: "0 24px",
      margin: "2rem auto",
      marginBottom: "4rem",
    },
    callToAction: {
      top: "50%",
    },
    slogan: {
      textAlign: "center",
    },
    title: {
      fontSize: "36px",
    },
    subtitle: {
      fontSize: "14px",
      fontFamily: "TimesNewRomanItalic",
    },
  },
}));

const SliderSection = () => {
  const [slider, setSlider] = useState(false);
  const classes = useStyles();

  const changeSlider = () => {
    if (window.scrollY > 0) {
      setSlider(true);
    } else {
      setSlider(false);
    }
  };
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  window.addEventListener("scroll", changeSlider);
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return (
      <div className={classes.container}>
        <Grid container justifyContent="center" spacing={9}>
          <Grid item xs={2}>
            <Hawaii />
          </Grid>
          <Grid item xs={7}>
            <Maps />
          </Grid>
          <Grid item xs={3}>
            <VietNam />
          </Grid>
        </Grid>
        <div className={classes.slogan}>
          <p className={classes.subtitle}>Become the leading</p>
          <p className={classes.subtitle}>
            Design Consulting Company in the segment
          </p>
          <h3 className={classes.title}>“Premium & Luxury”</h3>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.sliderSection}>
      <div
        className={classes.background}
        style={
          slider
            ? {
                backgroundImage: `url(${backgroundImage})`,
                marginTop: "10rem",
                marginBottom: "6rem",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                transition: "all 2s",
              }
            : null
        }
      >
        <div
          className={classes.container}
          style={
            slider
              ? {
                  top: "-10px",
                  transform: "scale(40%)",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  left: "0px",
                }
              : null
          }
        >
          <Grid container justifyContent="center" spacing={9}>
            <Grid item xs={2}>
              <Hawaii />
            </Grid>
            <Grid item xs={7}>
              <Maps />
            </Grid>
            <Grid item xs={3}>
              <VietNam />
            </Grid>
          </Grid>
          <div
            className={classes.callToAction}
            style={
              slider
                ? {
                    height: 200,
                  }
                : null
            }
          >
            <h6
              className={classes.textH6}
              style={
                slider
                  ? {
                      fontSize: "40px",
                      width: "9000px",
                    }
                  : null
              }
            >
              Become the leading Design Consulting Company in the segment
            </h6>
            <div
              className={classes.img}
              style={
                slider
                  ? {
                      width: "900px",
                    }
                  : null
              }
            >
              <img src={arrow} alt="CTA" className={classes.image} />
            </div>
            <h2
              className={classes.textH2}
              style={
                slider
                  ? {
                      fontSize: "80px",
                      width: "9000px",
                    }
                  : null
              }
            >
              "Premium & Luxury"
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
