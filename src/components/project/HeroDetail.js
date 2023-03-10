import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import projectList from '../../utils/project.json'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    fontSize: "16px",
  },
  containerMain: {
    // background: 'rgb(91,91,91)',
    background:
      "linear-gradient(180deg, rgba(91,91,91,0.46124387254901966) 0%, rgba(255,255,255,1) 61%)",
    fontFamily: "Times New Roman",
    position: "relative",
    marginBottom: "2rem",
  },
  mainProject: {
    margin: "0 auto",
    paddingTop: "2rem",
    maxWidth: "1280px",
    height: "calc(100vh - 124px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: "40px",
    textTransform: "uppercase",
    color: "#fe5600",
  },
  img: {
    width: "100%",
  },
  thumbnail: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  detailProject: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    width: "1280px",
    textAlign: "center",
    fontStyle: "italic",
    "&>*": {
      padding: " 0 20px",
      flex: 1,
    },
    "& th": {
      textAlign: "left",
    },
    "& tr": {
      lineHeight: "20px",
      fontWeight: "bold",
    },
  },
  client: {
    borderLeft: " 1px solid",
    borderRight: " 1px solid",
    textAlign: "left",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
  },
  td: {
    textAlign: "right",
  },
  "@media (max-width: 1280px)": {
    container: {},
    containerMain: {
      background:
        "linear-gradient(180deg, rgba(91,91,91,0.46124387254901966) 0%, rgba(255,255,255,1) 61%)",
      fontFamily: "Times New Roman",
    },
    mainProject: {
      margin: "0 auto",
      paddingTop: "2rem",
      width: "100%",
      height: "calc(100vh - 124px)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
      fontSize: "30px",
      textTransform: "uppercase",
      color: "#fe5600",
    },
    img: {
      width: "100%",
    },
    thumbnail: {
      width: "100%",
      margin: "0 auto",
    },
    detailProject: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",
      margin: "0 auto",
      width: "100%",
      textAlign: "center",
      fontStyle: "italic",
      "&>*": {
        padding: " 0 20px",
        flex: 1,
      },
      "& th": {
        textAlign: "left",
      },
      "& tr": {
        lineHeight: "20px",
        fontWeight: "bold",
      },
    },
    client: {
      border: "none",
      textAlign: "left",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "150px",
      width: "100%",
    },
    td: {
      textAlign: "right",
    },
  },
}));

const HeroDetail = ({ project }) => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(`http://themoderntouch.co:8000/v1/project`);
      setData(res.data);
    };
    // console.log(search);
    fetchProjects();
    // console.log(data);
  }, []);
  // console.log(data);
  const otherProject = () => {
    const filterData = data.filter((item) => item._id !== id);
    const randomIndex = Math.floor(Math.random() * filterData.length);

    const newID = filterData[randomIndex]._id;
    navigate(`/projects/${newID}`);
  };
  // console.log(id);
  return (
    <div className={classes.containerMain}>
      <div className={classes.mainProject}>
        <h2 className={classes.title}>{project?.name}</h2>
        <div className={classes.thumbnail}>
          <img
            className={classes.img}
            src={project?.thumbnail}
            alt="thumnail"
          />
        </div>
        <div className={classes.detailProject}>
          <div>
            <p style={{ textAlign: "justify" }}>
              {lang
                ? project?.translations.vi.description
                : project?.description}
            </p>
          </div>
          <div className={classes.client}>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>{lang ? "Khách hàng" : "Client"}:</th>
                  {project?.clientOther ? (
                    <td className={classes.td}>
                      {project?.client}
                      <br />
                      {project?.clientOther}
                    </td>
                  ) : (
                    <td className={classes.td}>{project?.client}</td>
                  )}
                </tr>
                <tr>
                  <th>{lang ? "Địa điểm" : "Location"}:</th>
                  <td className={classes.td}>
                    {lang
                      ? project?.translations.vi.location
                      : project?.location}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table style={{ width: "100%", textAlign: "left" }}>
              <tbody>
                <tr>
                  <th>{lang ? "Diện tích lô đất" : "Lot area"}:</th>
                  <td className={classes.td}>
                    {project?.lotArea} m
                    <span style={{ verticalAlign: "super", fontSize: "10px" }}>
                      2
                    </span>
                  </td>
                </tr>
                {project?.conArea && (
                  <tr>
                    <th style={{ width: "200px" }}>
                      {lang ? "Diện tích xây dựng" : "Construction area"}:
                    </th>
                    <td className={classes.td}>
                      {project?.conArea} m
                      <span
                        style={{ verticalAlign: "super", fontSize: "10px" }}
                      >
                        2
                      </span>
                    </td>
                  </tr>
                )}
                {project?.pool && (
                  <tr>
                    <th style={{ width: "200px" }}>
                      {lang ? "Khu công cộng" : "Public area"}:
                    </th>
                    <td className={classes.td}>
                      {project?.pool} m
                      <span
                        style={{ verticalAlign: "super", fontSize: "10px" }}
                      >
                        2
                      </span>
                    </td>
                  </tr>
                )}

                {project?.number && (
                  <tr>
                    <th style={{ width: "200px" }}>
                      {lang ? "Số tầng" : "Number of stories"}:
                    </th>
                    <td className={classes.td}>
                      {lang ? project?.translations.vi.number : project?.number}
                    </td>
                  </tr>
                )}
                <tr>
                  <th>{lang ? "Phong cách" : "Style"}:</th>
                  <td className={classes.td}>
                    {lang ? project?.translations.vi.style : project?.style}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ width: "100%", margin: "auto" }}>
          <div
            className="scrolldown"
            style={{
              color: "#fe5600",
              margin: "0 auto",
              transform: "scale(0.6)",
            }}
          >
            <div className="chevrons">
              <div className="chevrondown" />
              <div className="chevrondown" />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "40vh",
          left: "30px",
          zIndex: 100,
          cursor: "pointer",
        }}
      >
        <ArrowBackIcon fontSize="medium" onClick={otherProject} />
      </div>
      <div
        style={{
          position: "fixed",
          top: "40vh",
          right: "30px",
          zIndex: 100,
          cursor: "pointer",
        }}
      >
        <ArrowForwardIcon fontSize="medium" onClick={otherProject} />
      </div>
    </div>
  );
};

export default HeroDetail;
