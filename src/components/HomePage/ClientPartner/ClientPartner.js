import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

import { useSelector } from "react-redux";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Thumbs } from "swiper";
import "../../../pages/Services/button.css";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
  },
  containerMobile: {
    textAlign: "center",
    padding: "0 20px",
    margin: "0 auto",
  },
  content: {
    margin: "0 auto",
    width: "1280px",
  },
  title: {
    fontSize: "36px",
    marginBottom: "2.5rem",
    marginTop: "2rem",
  },
  circle: {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    "&:hover": {
      border: "4px solid rgba(0,0,0,0.2)",
      transition: "ease-out 0.2s",
    },
  },
  desciption: {
    textAlign: "justify",
    fontSize: "15px",
    marginTop: "1rem",
    fontStyle: "italic",
  },
  border: {
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
    width: "100%",
    borderBottom: "1px solid",
  },
  subTitle: {
    fontSize: "12px",
    fontStyle: "italic",
  },
  "@media (max-width: 1280px)": {
    content: {
      width: "1024px",
    },
  },

  "@media (max-width: 1024px)": {
    title: {
      fontSize: "30px",
      padding: "0 30px",
    },
    circle: {
      height: "70px",
      width: "70px",
    },
    container: {
      margin: "0 auto",
    },
    content: {
      margin: "0 auto",
      width: "960px",
    },
  },
  "@media (max-width: 640px)": {
    content: {
      margin: "0 auto",
      width: "390px",
    },
  },
}));

const ClientPartner = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  let [clientList, setClientList] = useState([]);
  const url = "http://themoderntouch.co:8000/v1";
  useEffect(() => {
    axios.get(`${url}/client`).then((response) => {
      setClientList(response.data);
    });
  }, []);
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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

  const viewPort = useViewport();
  const isMobile = viewPort.width <= 640;
  if (isMobile) {
    return (
      <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
        {lang ? (
          <h2
            className={classes.title}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            KHÁCH HÀNG
            <span style={{ fontStyle: "italic", color: "#fe5600" }}>
              VÀ
            </span>{" "}
            ĐỐI TÁC
          </h2>
        ) : (
          <h2
            className={classes.title}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            OUR CLIENTS{" "}
            <span style={{ fontStyle: "italic", color: "#fe5600" }}>&</span>{" "}
            PARTNERS
          </h2>
        )}
        <Slider {...settings}>
          {clientList.map((item, index) => {
            return (
              <div
                className={classes.containerMobile}
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
                key={index}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={item.avatar} className={classes.circle} alt="" />
                </div>
                <h3 style={{ marginTop: "2rem" }}>
                  {lang ? item.viname : item.name}
                </h3>
                <div className={classes.border}></div>
                <p className={classes.subTitle}>
                  {lang ? item.vijob : item.job}
                </p>
                <p className={classes.desciption}>
                  {lang ? item.vicomment : item.comment}
                </p>
              </div>
            );
          })}
          {/* <div
            className={classes.containerMobile}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="2000"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={image1} className={classes.circle} alt="" />
            </div>
            <h3 style={{ marginTop: "2rem" }}>
              {lang ? language.vi.homepage.clientAndPartner.vanQuyen.name : language.en.homepage.clientAndPartner.vanQuyen.name}
            </h3>
            <div className={classes.border}></div>
            <p className={classes.subTitle}>
              {lang ? language.vi.homepage.clientAndPartner.vanQuyen.subtitle : language.en.homepage.clientAndPartner.vanQuyen.subtitle}
            </p>
            <p className={classes.desciption}>
              {lang ? language.vi.homepage.clientAndPartner.vanQuyen.description : language.en.homepage.clientAndPartner.vanQuyen.description}
            </p>
          </div>
          <div
            className={classes.containerMobile}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={image2} className={classes.circle} alt="" />
            </div>

            <h3 style={{ marginTop: "2rem" }}>
              {lang ? language.vi.homepage.clientAndPartner.myLinh.name : language.en.homepage.clientAndPartner.myLinh.name}
            </h3>
            <div className={classes.border}></div>
            <p className={classes.subTitle}>
              {lang ? language.vi.homepage.clientAndPartner.myLinh.subtitle : language.en.homepage.clientAndPartner.myLinh.subtitle}
            </p>
            <p className={classes.desciption}>
              {lang ? language.vi.homepage.clientAndPartner.myLinh.description : language.en.homepage.clientAndPartner.myLinh.description}
            </p>
          </div>
          <div
            className={classes.containerMobile}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={image3} className={classes.circle} alt="" />
            </div>
            <h3 style={{ marginTop: "2rem" }}>
              {lang ? language.vi.homepage.clientAndPartner.vanThoai.name : language.en.homepage.clientAndPartner.vanThoai.name}
            </h3>
            <div className={classes.border}></div>
            <p className={classes.subTitle}>
              {lang ? language.vi.homepage.clientAndPartner.vanThoai.subtitle : language.en.homepage.clientAndPartner.vanThoai.subtitle}
            </p>
            <p className={classes.desciption}>
              {lang ? language.vi.homepage.clientAndPartner.vanThoai.description : language.en.homepage.clientAndPartner.vanThoai.description}
            </p>
          </div> */}
        </Slider>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Grid
          container
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <Grid item xs={12} mb={4}>
            {lang ? (
              <h2
                className={classes.title}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                KHÁCH HÀNG
                <span style={{ fontStyle: "italic", color: "#fe5600" }}>
                  {" "}
                  VÀ{" "}
                </span>{" "}
                ĐỐI TÁC
              </h2>
            ) : (
              <h2
                className={classes.title}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                OUR CLIENTS{" "}
                <span style={{ fontStyle: "italic", color: "#fe5600" }}>&</span>{" "}
                PARTNERS
              </h2>
            )}
          </Grid>
          <Grid item xs={10} md={12} margin="auto">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              autoplay={{
                delay: 4000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay, Thumbs]}
              className={`mySwiper2 ${classes.swiper}`}
            >
              <SwiperSlide>
                <Grid container spacing={5}>
                  {clientList.slice(0, 3).map((item, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        data-aos="fade-up"
                        data-aos-delay={`${200 * index}`}
                        data-aos-duration="2000"
                        key={index}
                      >
                        <img
                          src={item.avatar}
                          className={classes.circle}
                          alt=""
                        />
                        <h3 style={{ marginTop: "2rem" }}>
                          {lang ? item.viname : item.name}
                        </h3>
                        <div className={classes.border}></div>
                        <p className={classes.subTitle}>
                          {lang ? item.vijob : item.job}
                        </p>
                        <p className={classes.desciption}>
                          "{lang ? item.vicomment : item.comment}"
                        </p>
                      </Grid>
                    );
                  })}
                </Grid>
              </SwiperSlide>
              {clientList.length > 3 && (
                <SwiperSlide>
                  <Grid container spacing={5}>
                    {clientList.slice(3, 6).map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          data-aos="fade-up"
                          data-aos-delay={`${200 * index}`}
                          data-aos-duration="2000"
                          key={index}
                        >
                          <img
                            src={item.avatar}
                            className={classes.circle}
                            alt=""
                          />
                          <h3 style={{ marginTop: "2rem" }}>
                            {lang ? item.viname : item.name}
                          </h3>
                          <div className={classes.border}></div>
                          <p className={classes.subTitle}>
                            {lang ? item.vijob : item.job}
                          </p>
                          <p className={classes.desciption}>
                            "{lang ? item.vicomment : item.comment}"
                          </p>
                        </Grid>
                      );
                    })}
                  </Grid>
                </SwiperSlide>
              )}
              {clientList.length > 6 && (
                <SwiperSlide>
                  <Grid container spacing={5}>
                    {clientList.slice(6, 9).map((item, index) => {
                      return (
                        <Grid
                          item
                          xs={12}
                          md={4}
                          data-aos="fade-up"
                          data-aos-delay={`${200 * index}`}
                          data-aos-duration="2000"
                          key={index}
                        >
                          <img
                            src={item.avatar}
                            className={classes.circle}
                            alt=""
                          />
                          <h3 style={{ marginTop: "2rem" }}>
                            {lang ? item.viname : item.name}
                          </h3>
                          <div className={classes.border}></div>
                          <p className={classes.subTitle}>
                            {lang ? item.vijob : item.job}
                          </p>
                          <p className={classes.desciption}>
                            "{lang ? item.vicomment : item.comment}"
                          </p>
                        </Grid>
                      );
                    })}
                  </Grid>
                </SwiperSlide>
              )}
            </Swiper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ClientPartner;
