import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import { listImageAboutUs } from "../../utils/imageAboutUs";
import Employee from "./Employee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import language from "../../languages/en";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  ceo: {
    width: "800px",
    margin: "0 auto",
  },
  img: {
    width: "100%",
  },
  divImage: {
    width: "120px",
    margin: "60px auto 30px auto",
    backgroundColor: "white",
  },
  divImage1: {
    width: "130px",
    margin: "60px auto 30px auto",
    backgroundColor: "white",
  },
  divImage2: {
    width: "400px",
    margin: "60px auto 30px auto",
    backgroundColor: "white",
  },
  divImage3: {
    width: "150px",
    margin: "60px auto 44px auto",
    backgroundColor: "white",
  },
  divImage4: {
    width: "150px",
    margin: "60px auto 30px auto",
    backgroundColor: "white",
  },
  divImage5: {
    width: "220px",
    margin: "60px auto 30px auto",
    backgroundColor: "white",
  },
  divImage6: {
    width: "300px",
    margin: "60px auto 0px auto",
    backgroundColor: "white",
  },
  flexDiv: {
    display: "flex",
    justifyContent: "center",
  },
  flexItem: {
    padding: "60px",
  },
  container: {
    textAlign: "center",
    position: "relative",
    fontSize: "18px",
    fontFamily: "Times New Roman",
    margin: "0 auto",
  },
  verticalLine: {
    position: "absolute",
    width: "1px",
    height: "100%",
    backgroundColor: "black",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: -1,
  },
  svg: {
    position: "fixed",
    width: "100vw",
    height: "calc(100vh - 124px)",
    top: "100px",
    zIndex: -1,
  },
  description: {
    backgroundColor: "white",
    padding: "20px",
    "& h4": {
      fontSize: "28px",
      paddingBottom: "10px",
    },
  },
  missionTitle: {
    fontSize: "30px",
    color: "#fe5600",
    marginBottom: "10px",
  },
  mission: {
    width: "635px",
    margin: "0 auto",
    fontSize: "16px",
  },
  leaderContainer: {
    backgroundColor: "white",
    fontSize: "16px",
    "& p": {
      marginTop: "15px",
      marginBottom: "15px",
    },
  },
  nameLead: {
    fontSize: "24px",
    borderBottom: "1px solid",
    width: "220px",
    margin: "0 auto",
    position: "relative",
    paddingBottom: "5px",
  },
  borderLine: {
    position: "absolute",
    width: "70px",
    height: "4px",
    backgroundColor: "black",
    bottom: -2.5,
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "10px",
  },
  footerDiv: {
    backgroundImage: `url(${listImageAboutUs[7]})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  employee: {
    width: "1280px",
    margin: "0 auto",
  },
  imageSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
  },
  "@media (max-width: 1024px)": {
    mission: {
      width: "100%",
      margin: "0 auto",
      fontSize: "16px",
    },
    employee: {
      width: "100%",
    },
  },
  imageSection: {
    display: "none",
  },
  "@media (max-width: 640px)": {
    mission: {
      width: "100%",
      margin: "0 auto",
      fontSize: "16px",
    },
    employee: {
      width: "100%",
    },
    ceo: {
      width: "350px",
      margin: "0 auto",
      overflowX: "hidden",
      // "& *": {
      //     width: "98vw"
      // },
      // "& > p": {
      //     width: "300px"
      // }
    },
  },
  imageSection: {
    display: "none",
  },
}));

const History = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  const langAbout = !lang ? language.en.about : language.vi.about;
  let [historyList, setHistoryList] = useState([]);
  let [quoteList, setQuoteList] = useState([]);
  let [leader, setLeader] = useState([]);
  const url = "http://themoderntouch.co:8000/v1";
  useEffect(() => {
    axios.get(`${url}/history`).then((response) => {
      setHistoryList(response.data);
      // console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${url}/leader`).then((response) => {
      setLeader(response.data);
      // console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${url}/quote`).then((response) => {
      setQuoteList(response.data);
      // console.log(response.data);
    });
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  const ref = useRef(null);

  useEffect(() => {
    const path = ref.current;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;
    window.addEventListener("scroll", () => {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight +
          document.documentElement.clientHeight);
      var drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;
    });
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.svg}>
        <svg id="chart" height="100%" style={{ backgroundClip: "red" }}>
          <line
            ref={ref}
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#fe5600"
            strokeWidth="3px"
          ></line>
        </svg>
      </div>

      <div className={classes.divImage}>
        <img
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          className={classes.img}
          src={historyList[0]?.logo}
          alt=""
        />
      </div>
      <div className={classes.description}>
        <h4
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {historyList[0]?.year}
        </h4>
        <p
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          {historyList[0]?.location}
        </p>
        <p
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {lang ? historyList[0]?.videscription : historyList[0]?.description}
        </p>
      </div>
      <div className={classes.divImage1}>
        <img
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          className={classes.img}
          src={historyList[1]?.logo}
          alt=""
        />
      </div>
      <div className={classes.description}>
        <h4
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {historyList[1]?.year}
        </h4>
        {/* <p data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                    data-aos-delay="150">7 Staffs</p> */}
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
          {lang ? historyList[1]?.vilocation : historyList[1]?.location}
        </p>
      </div>
      <div className={classes.divImage2}>
        <img
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          className={classes.img}
          src={historyList[2]?.logo}
          alt=""
        />
      </div>
      <div className={classes.description}>
        <h4
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          {historyList[2]?.year}
        </h4>
        {/* <p data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                    data-aos-delay="150">7 Staffs</p> */}
        <p
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {lang ? historyList[2]?.vilocation : historyList[2]?.location}
        </p>
      </div>
      <div className={classes.flexDiv}>
        <div className={classes.flexItem}>
          <div className={classes.divImage4}>
            <img
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              className={classes.img}
              src={historyList[3]?.logo}
              alt=""
            />
          </div>
          <div className={classes.description}>
            <h4
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {historyList[3]?.year}
            </h4>
            {/* <p data-aos="fade-up"
                            data-aos-easing="ease"
                            data-aos-duration="1000"
                            data-aos-delay="150">35 Staffs</p> */}
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {lang ? historyList[3]?.vilocation : historyList[3]?.location}
            </p>
          </div>
        </div>
        <div className={classes.flexItem}>
          <div className={classes.divImage3}>
            <img
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              className={classes.img}
              src={historyList[4]?.logo}
              alt=""
            />
          </div>
          <div className={classes.description}>
            <h4
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {historyList[4]?.year}
            </h4>
            {/* <p data-aos="fade-up"
                            data-aos-easing="ease"
                            data-aos-duration="1000"
                            data-aos-delay="150">35 Staffs</p> */}
            <p
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              {lang ? historyList[4]?.vilocation : historyList[4]?.location}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={classes.divImage5}>
          <img
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            className={classes.img}
            src={historyList[5]?.logo}
            alt=""
          />
        </div>
        <div className={classes.description}>
          <h4
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {lang ? "HIỆN TẠI" : "NOW"}
          </h4>
          {/* <p data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                        data-aos-delay="150">60 Staffs</p> */}
          <p
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {lang ? historyList[5]?.vilocation : historyList[5]?.location}
          </p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          backgroundColor: "white",
          padding: "10px",
        }}
      >
        <h4
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          className={classes.missionTitle}
        >
          {lang ? quoteList[0]?.vititle : quoteList[0]?.title}
        </h4>
        <p
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="100"
          className={classes.mission}
        >
          {lang ? quoteList[0]?.videscription : quoteList[0]?.description}
        </p>
      </div>
      <div className={classes.leaderContainer}>
        <div className={classes.divImage6}>
          <img
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            className={classes.img}
            style={{ marginTop: "-30px" }}
            src={leader[0]?.avatar}
            alt=""
          />
        </div>
        <div
          className={classes.nameLead}
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h4>{lang ? leader[0]?.viname : leader[0]?.name}</h4>
          <div className={classes.borderLine}></div>
        </div>
        <div className={classes.ceo}>
          <h4
            dangerouslySetInnerHTML={{
              __html: lang ? leader[0]?.vijob : leader[0]?.job,
            }}
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            style={{
              fontSize: "18px",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: lang ? leader[0]?.videscription : leader[0]?.description,
            }}
          />
        </div>
        <div className={classes.employee}>
          <Employee />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            backgroundColor: "white",
            padding: "10px",
            maxWidth: "1280px",
            margin: "0 auto",
          }}
        >
          <h4
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            className={classes.missionTitle}
          >
            {lang ? quoteList[1]?.vititle : quoteList[1]?.title}
          </h4>
          <p
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
            data-aos-delay="100"
            style={{ fontSize: "16px" }}
          >
            {lang ? quoteList[1]?.videscription : quoteList[1]?.description}
          </p>
        </div>
      </div>

      {/* <div className={classes.imageSection}>
                <div style={{
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "white"
                }}>
                    <img
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                        style={{
                            borderRadius: "20px",
                            height: "200px"
                        }} className={classes.img} src={listImageAboutUs[8]} alt='' />
                </div>
                <div style={{
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "white"
                }}>
                    <img
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                        data-aos-delay="100"
                        style={{
                            borderRadius: "20px",
                            height: "200px"
                        }} className={classes.img} src={listImageAboutUs[9]} alt='' />
                </div>
                <div style={{
                    width: "400px",
                    padding: "20px",
                    backgroundColor: "white"
                }}>
                    <img
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        style={{
                            borderRadius: "20px",
                            height: "200px"
                        }} className={classes.img} src={listImageAboutUs[10]} alt='' />
                </div>
            </div> */}
    </div>
  );
};

export default History;
