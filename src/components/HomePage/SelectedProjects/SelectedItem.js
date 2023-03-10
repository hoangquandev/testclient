import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";


import React from "react";
import SelectedMobile from "./SelectedMobile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import language from "../../../languages/en";
const useStyles = makeStyles((theme) => ({
  image: {
    borderRadius: "10px",
    maxWidth: "100%",
  },
  thumbnail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  itemSelect: {
    margin: "0 10px",
    cursor: "pointer",
  },
  description: {
    height: "65px",
    whiteSpace: "pre-line",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "16px"
  },
  square: {
    verticalAlign: "super",
    fontSize: "9px"
  },
  client: {
    textAlign: "right"
  },
  number: {
    textAlign: "right"
  }

}));

const SelectedItem = (props) => {
  const classes = useStyles();
  const index = props.index;
  const projectList = props.projectList
  // console.log(projectList);
  const lang = useSelector((state) => state.lang.lang)
  const selected = !lang ? language.en.homepage.selectProject : language.vi.homepage.selectProject

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
    return <SelectedMobile projectList={projectList} index={index} />;
  }
  return (
    <div

    >
      <Grid container spacing={2} style={{ padding: "0 30px" }}>
        <Grid
          item
          xs={6}
          className={classes.thumbnail}
          style={{
            backgroundImage: `url(${projectList[index]?.thumbnail})`,
            backgroundSize: `100%`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"

          }}
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          {/* <div style={{
            backgroundImage: `url(${projectList[index]?.thumbnailImage})`,
            backgroundSize: "cover"

          }}> */}
          {/* <img
              src={projectList[index]?.thumbnailImage}
              className={classes.image}
              style={{ width: `${projectList[index]?.widthImage}` }}
              alt=""
              data-aos="fade-up"
              data-aos-duration="2000"
            /> */}
          {/* </div> */}
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={8}

                >
                  <div data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000">
                    <img
                      src={projectList[index]?.selectedImages[0]}
                      className={classes.image}
                      alt=""

                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={4}

                >
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <img
                        src={projectList[index]?.selectedImages[1]}
                        className={classes.image}
                        alt=""
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}

                    >
                      <img
                        src={projectList[index]?.selectedImages[2]}
                        className={classes.image}
                        alt=""
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={1.8}
                style={{ fontSize: "11px", fontStyle: "italic" }}
              >
                <Grid
                  item
                  xs={4}
                  style={{ fontSize: "11px", textAlign: "justify" }}
                >
                  <div
                    style={{ height: "150px" }}
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <h3 style={{ textAlign: "left" }}>{projectList[index]?.name}</h3>
                    <p className={classes.description}>"{lang ? projectList[index]?.translations.vi.description : projectList[index]?.description}</p>
                    <Link to={`/projects/${projectList[index]?._id}`} style={{ color: "#fe5600", fontStyle: "italic", fontSize: "13px" }}> {lang ? "Xem thêm ..." : "Read more ..."}</Link>

                  </div>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontSize: "11px" }}
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{selected.client}</p>
                    {projectList[index]?.clientOther ?
                      <b className={classes.client}>{projectList[index]?.client} <br /> {projectList[index]?.clientOther}</b>
                      :
                      <b className={classes.client}>{projectList[index]?.client}</b>
                    }

                  </div>

                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{selected.location}:</div>
                    <b>{lang ? projectList[index]?.translations.vi.location : projectList[index]?.location}</b>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{ fontSize: "12px" }}
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{selected.lotArea}:</div>
                    <b>
                      {projectList[index]?.lotArea} m
                      <span className={classes.square} >2</span>
                    </b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{selected.conArea}:</div>
                    <b>
                      {projectList[index]?.conArea} m
                      <span className={classes.square} >2</span>
                    </b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{selected.publicArea}:</div>
                    <b>
                      {projectList[index]?.pool} m
                      <span className={classes.square} >2</span>
                    </b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "16px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{selected.stories}:</div>
                    <b className={classes.number}>{projectList[index]?.number}</b>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      lineHeight: "22px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>{selected.style}:</div>
                    <b>{lang ? projectList[index]?.translations.vi.style : projectList[index]?.style}</b>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SelectedItem;
