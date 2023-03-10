import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

import { Link } from "react-router-dom";
import axios from "axios";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
  },
  changeHover: {
    cursor: "pointer",
    "&:hover": {
      stroke: "#fe5600",
    },
  },
  posts: {
    width: "1280px",
    margin: "4rem auto",
    // paddingTop: "2rem",
  },
  mainPost: {
    paddingBottom: "30px",
    position: "relative",
  },
  arrow: {
    position: "absolute",
    bottom: "46px",
    right: "0",
    width: "80px",
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    // padding: "0 20px"
    color: "#fe5600",
    zIndex: 200,
  },
  filterNews: {
    width: "1280px",
    margin: "0 auto 4rem",
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    lineHeight: "24px",
    "& > li": {
      fontStyle: "normal",
      fontSize: "20px",
    },
  },
  button: {
    fontSize: "16px",
    borderRadius: "20px",
    border: "none",
    padding: "2px 8px",
    background: "transparent",
    cursor: "pointer",
    fontFamily: "Times New Roman",
  },
  "@media (max-width: 1024px)": {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      // gap: "30px",
    },
    posts: {
      width: "100%",
      margin: "2rem auto",
      padding: "0 16px",
    },
    mainPost: {
      // paddingBottom: "30px",
      position: "relative",
    },
    arrow: {
      position: "absolute",
      bottom: "80px",
      right: "0",
      width: "50px",
      display: "flex",
      backgroundColor: "white",
      justifyContent: "center",
      // padding: "0 20px"
      color: "#fe5600",
    },
    filterNews: {
      width: "100%",
      margin: "0 auto 4rem",
    },
    nav: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      lineHeight: "20px",
      "& > li": {
        flex: "1",
        fontStyle: "normal",
        fontFamily: "Times New Roman",
        textAlign: "center",
      },
    },
  },
  "@media (max-width: 640px)": {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      // gap: "30px",
    },
    posts: {
      width: "100%",
      margin: "0 auto",
      padding: "0 16px",
    },
    mainPost: {
      // paddingBottom: "30px",
      position: "relative",
    },
    arrow: {
      position: "absolute",
      bottom: "80px",
      right: "0",
      width: "50px",
      display: "flex",
      backgroundColor: "white",
      justifyContent: "center",
      // padding: "0 20px"
      color: "#fe5600",
    },
    filterNews: {
      width: "100%",
      margin: "0 auto 4rem",
    },
    nav: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      lineHeight: "20px",

      "& > li": {
        flex: "1",
        fontStyle: "normal",

        textAlign: "center",
      },
    },
  },
}));
const Post = () => {
  const classes = useStyles();
  const [postList, setPostList] = useState([]);
  const [banner, setBanner] = useState([]);
  const [notBanner, setNotBanner] = useState([]);

  useEffect(() => {
    axios.get(`http://themoderntouch.co:8000/v1/post/`).then((res) => {
      setPostList(res.data);
    });
  }, []);
  const [newfilter, setNew] = useState(true);
  const [eventfilter, setEvent] = useState(false);
  const [mediafilter, setMedia] = useState(false);
  const [awardfilter, setAward] = useState(false);
  const handleNew = () => {
    setNew(true);
    setEvent(false);
    setMedia(false);
    setAward(false);
  };
  const handleEvent = () => {
    setNew(false);
    setEvent(true);
    setMedia(false);
    setAward(false);
  };
  const handleMedia = () => {
    setNew(false);
    setEvent(false);
    setMedia(true);
    setAward(false);
  };
  const handleAward = () => {
    setNew(false);
    setEvent(false);
    setMedia(false);
    setAward(true);
  };
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        "http://themoderntouch.co:8000/v1/post/banner"
      );
      setBanner(res.data);
      // console.log(res.data);
    };
    fetchProjects();
    // console.log(search);
  }, []);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        "http://themoderntouch.co:8000/v1/post/notbanner"
      );
      setNotBanner(res.data);
      // console.log(res.data);
    };
    fetchProjects();
    // console.log(search);
  }, []);

  return (
    <div className={classes.posts}>
      {/* <div className={classes.filterNews}>
                <ul className={classes.nav}>
                    <li >
                        <button className={classes.button} onClick={handleNew} style={newfilter ? { color: "#fe5600", border: "1px solid #fe5600" } : null} >NEWS</button>
                    </li>
                    <li>
                        <button className={classes.button} onClick={handleEvent} style={eventfilter ? { color: "#fe5600", border: "1px solid #fe5600" } : null}>EVENT</button>
                    </li>
                    <li>
                        <button className={classes.button} onClick={handleMedia} style={mediafilter ? { color: "#fe5600", border: "1px solid #fe5600" } : null}>MEDIA</button>
                    </li>
                    <li>
                        <button className={classes.button} onClick={handleAward} style={awardfilter ? { color: "#fe5600", border: "1px solid #fe5600" } : null}>AWARDS</button>
                    </li>
                </ul>
            </div> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1300"
      >
        {banner.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={classes.mainPost}

              // data-aos-delay={key * 200}
              >
                <Link to={item._id}>
                  <NewsCard
                    img={item.cover}
                    time={item.summary}
                    name={item.title}
                    fontSize="24px"
                  />
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={classes.arrow}>
          <div className=" prev">
            <svg
              className={classes.changeHover}
              style={{ width: "40px" }}
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#231f20;}" }}
                />
              </defs>
              <path
                className="cls-1"
                d="M19.19,24.2a1.32,1.32,0,0,0-.57.12L10.27,16a.48.48,0,0,0-.68.68L17.94,25a1.32,1.32,0,0,0-.12.57,1.37,1.37,0,1,0,1.37-1.37Z"
              />
              <path
                className="cls-1"
                d="M9.92,14.18a.49.49,0,0,0,.34-.14l8.36-8.36a1.32,1.32,0,0,0,.57.12,1.37,1.37,0,1,0-1.37-1.37,1.32,1.32,0,0,0,.12.57L9.58,13.36a.5.5,0,0,0,0,.68A.51.51,0,0,0,9.92,14.18Z"
              />
            </svg>
          </div>
          <div className=" next">
            <svg
              className={classes.changeHover}
              id="Layer_1"
              style={{ width: "40px" }}
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#231f20;}" }}
                />
              </defs>
              <path
                className="cls-1"
                d="M10.81,24.2a1.32,1.32,0,0,1,.57.12L19.73,16a.48.48,0,0,1,.68.68L12.06,25a1.32,1.32,0,0,1,.12.57,1.37,1.37,0,1,1-1.37-1.37Z"
              />
              <path
                className="cls-1"
                d="M20.08,14.18a.49.49,0,0,1-.34-.14L11.38,5.68a1.32,1.32,0,0,1-.57.12,1.37,1.37,0,1,1,1.37-1.37,1.32,1.32,0,0,1-.12.57l8.36,8.36a.5.5,0,0,1,0,.68A.51.51,0,0,1,20.08,14.18Z"
              />
            </svg>
          </div>
        </div>
      </Swiper>

      <div className={classes.container}>
        {notBanner?.map((post, key) => {
          return (
            <Link to={post._id} key={key}>
              <NewsCard
                index={key}
                img={post.cover}
                time={post.summary}
                name={post.title}
                key={key}
                fontSize="16px"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
