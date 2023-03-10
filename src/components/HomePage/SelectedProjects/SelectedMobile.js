import React from "react";
import { makeStyles } from "@mui/styles";
import Slider from "react-slick";
import ReadMoreButton from "../../../helpers/ReadMoreButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  "@media (max-width: 1024px)": {
    container: {
      padding: "0 60px",
      textAlign: "center",
      // boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      paddingBottom: "2rem",
    },
    description: {
      padding: "0 120px",
      textAlign: "justify",
      fontFamily: "Times New Roman",
      fontSize: "16px",
      fontStyle: "italic",
      marginBottom: "4rem",
    },
    imageContainer: {
      position: "relative",
      padding: "10px 110px",
      marginBottom: "3rem",
    },
    image1: {
      borderRadius: "8px",
    },
    image2: {
      width: "240px",
      height: "140px",
      borderRadius: "8px",
      position: "absolute",
      top: "30%",
      left: "90%",
      transform: "translate(-50%,-50%)",
    },
    image3: {
      width: "240px",
      height: "140px",
      borderRadius: "8px",
      position: "absolute",
      top: "70%",
      left: "10%",
      transform: "translate(-50%,-50%)",
    },
    nameProject: {
      fontFamily: "Times New Roman",
      fontSize: "26px",
      fontStyle: "bold",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      padding: "2rem 8px",
      textAlign: "center",
      // boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    },
    mainImage: {
      maxWidth: "100%",
    },
    description: {
      padding: "0 70px",
      textAlign: "justify",
      fontFamily: "Times New Roman",
      fontSize: "14px",
      fontStyle: "italic",
      marginBottom: "2rem",
    },
    imageContainer: {
      position: "relative",
      padding: "10px 70px",
      marginBottom: "3rem",
    },
    image1: {
      borderRadius: "8px",
    },
    image2: {
      width: "100px",
      height: "60px",
      borderRadius: "8px",
      position: "absolute",
      top: "0",
      left: "84%",
      transform: "translate(-50%,-50%)",
    },
    image3: {
      width: "100px",
      height: "60px",
      borderRadius: "8px",
      position: "absolute",
      top: "100%",
      left: "16%",
      transform: "translate(-50%,-50%)",
    },
    nameProject: {
      fontFamily: "Times New Roman",
      fontSize: "26px",
      fontStyle: "bold",
    },
  },
}));

const SelectedMobile = (props) => {
  const classes = useStyles();

  const projectList = props.projectList
  // console.log(projectList);

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const data = props.data;
  const index = props.index;
  const lang = useSelector((state) => state.lang.lang)
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
  if (isMobile) {
    return (
      <Slider {...settings}>
        {projectList?.map((item, key) => {
          return (
            <div key={key} className={classes.container}>
              <div>
                <img
                  src={item?.thumbnail}
                  alt=""
                  className={classes.mainImage}
                />
              </div>
              <div className={classes.description}>
                <p style={{ height: "180px" }}>{lang ? item?.translations.vi.description : item?.description}</p>
              </div>
              <div className={classes.imageContainer}>
                <img src={item?.selectedImages[0]} alt="" className={classes.image1} />

                <img src={item?.selectedImages[1]} alt="" className={classes.image2} />

                <img src={item?.selectedImages[2]} alt="" className={classes.image3} />
              </div>
              <div className={classes.nameProject}>{item.name}</div>
              <ReadMoreButton id={item._id} />
            </div>
          );
        })}
      </Slider>
    );
  }
  return (
    <div className={classes.container}>
      {/* <div>
        <img
          src={data[index].thumbnailImage}
          alt=""
          className={classes.mainImage}
        />
      </div>
      <div className={classes.description}>
        <p>{data[index].description}</p>
      </div>
      <div className={classes.imageContainer}>
        <img src={data[index].images[0]} alt="" className={classes.image1} />

        <img src={data[index].images[1]} alt="" className={classes.image2} />

        <img src={data[index].images[2]} alt="" className={classes.image3} />
      </div>
      <div className={classes.nameProject}>SUNRISE RESORT</div>
      <ReadMoreButton /> */}
    </div>
  );
};

export default SelectedMobile;
