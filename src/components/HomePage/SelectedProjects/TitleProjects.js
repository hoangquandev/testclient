import { makeStyles } from "@mui/styles";
import React from "react";
import "aos/dist/aos.css";
import language from "../../../languages/en";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  container: {
    // height: "225px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: "3rem",
    marginTop: "3rem",
  },
  title: {
    fontSize: "36px",
    fontFamily: "Times New Roman",
    fontStyle: "normal",
    textAlign: "center",
  },

  "@media (max-width: 1024px)": {
    title: {
      fontSize: "36px",
    },
  },
  "@media (max-width: 640px)": {
    title: {
      fontSize: "30px",
    },
  },
}));

const TitleProjects = () => {
  const classes = useStyles();
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
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return (
      <div>
        <h3 className={classes.title}>{!lang ? language.en.homepage.selectProject.title : lang.vi.homepage.selectProject.title}</h3>
      </div>
    );
  }
  return (
    <div
      className={classes.container}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <h3 className={classes.title}>{!lang ? language.en.homepage.selectProject.title : language.vi.homepage.selectProject.title}</h3>
    </div>
  );
};

export default TitleProjects;
