import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard.js";
import { makeStyles } from "@mui/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import Quotes from "../Quote/Quotes.js";
import language from "../../../languages/en.js";
import { useSelector } from "react-redux";
import axios from "axios";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "../../../pages/Services/button.css";

// import "./styles.css";

// import required modules
// import { Navigation } from "swiper";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    width: "1280px",
    maxWidth: "100%",
    margin: "0 auto",
  },
  title: {
    marginTop: "4rem",
    fontFamily: "Times New Roman",
    fontSize: "36px",
  },
  content: {
    width: "100%",
    margin: "2rem auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    "&:hover": {
      boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "0 auto",
    // width: "1020px",
  },
  containerItem: {
    width: "300px",
    height: "300px",
    margin: "15px 15px",
  },
  "@media (max-width: 1300px)": {
    containerCard: {
      width: "1060px",
    },
  },
  "@media (max-width: 1024px)": {
    containerCard: {
      width: "810px",
    },
    containerItem: {
      width: "240px",
      height: "240px",
      margin: "0 8px",
    },
    title: {
      fontSize: "36px",
    },
    button: {
      height: "50px",
      width: "50px",
    },
  },
  "@media (max-width: 640px)": {
    title: {
      fontSize: "30px",
    },
    containerCard: {
      width: "100%",
    },
    containerItem: {
      width: "330px",
      height: "100px",
      margin: "8px auto",
    },
  },
}));

const Service = () => {
  const classes = useStyles();
  const [isShownNext, setIsShownNext] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const lang = useSelector((state) => state.lang.lang);
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    const url = "http://themoderntouch.co:8000/v1";
    axios.get(`${url}/service`).then((response) => {
      setServiceList(response.data);
      // console.log(response.data)
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

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  const viewPort = useViewport();
  const isMobile = viewPort.width <= 640;
  if (isMobile) {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Times New Roman",
          width: "1280px",
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        <div>
          {!lang ? (
            <h3 className={classes.title}>
              WHAT WE DO
              <span style={{ color: "#fe5600", fontStyle: "italic" }}>&</span>
              OUR SERVICES
            </h3>
          ) : (
            <h3 className={classes.title}>
              {language.vi.homepage.services.title}
              <br />
              {language.vi.homepage.services.subTitle}
            </h3>
          )}
        </div>
        <div className={classes.content}>
          <div className={classes.containerCard}>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className={`mySwiper2 ${classes.swiper}`}
            >
              <SwiperSlide>
                <div xs={8}>
                  <div className={classes.containerCard}>
                    {serviceList?.slice(0, 6).map((item, index) => {
                      return (
                        <div
                          className={classes.containerItem}
                          data-aos="fade-up"
                          data-aos-easing="ease"
                          data-aos-duration="1000"
                          data-aos-delay="200"
                          key={index}
                        >
                          <ServiceCard service={item} index={index + 1} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
              {serviceList.length > 6 && (
                <SwiperSlide>
                  <div xs={8}>
                    <div className={classes.containerCard}>
                      {serviceList?.slice(6, 12).map((item, index) => {
                        return (
                          <div
                            className={classes.containerItem}
                            data-aos="fade-up"
                            data-aos-easing="ease"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            key={index}
                          >
                            <ServiceCard service={item} index={index + 1} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              )}
              {serviceList.length > 12 && (
                <SwiperSlide>
                  <div xs={8}>
                    <div className={classes.containerCard}>
                      {serviceList?.slice(12, 18).map((item, index) => {
                        return (
                          <div
                            className={classes.containerItem}
                            data-aos="fade-up"
                            data-aos-easing="ease"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            key={index}
                          >
                            <ServiceCard service={item} index={index + 1} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              )}

              <div className=" button-next  next">
                <svg
                  id="Layer_1"
                  style={{ width: "40px" }}
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: ".cls-1{fill:#231f20;}",
                      }}
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
              <div className=" button-prev  prev">
                <svg
                  style={{ width: "40px" }}
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                >
                  <defs>
                    <style
                      dangerouslySetInnerHTML={{
                        __html: ".cls-1{fill:#231f20;}",
                      }}
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
            </Swiper>
            {/* <div className={classes.containerItem}>
              <ServiceCard />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard2 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard3 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard4 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard5 />
            </div>
            <div className={classes.containerItem}>
              <ServiceCard6 />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      {lang ? (
        <h3
          className={classes.title}
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          {language.vi.homepage.services.title}
          <br />
          {language.vi.homepage.services.subTitle}
        </h3>
      ) : (
        <h3
          className={classes.title}
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          WHAT WE DO
          <span style={{ color: "#fe5600", fontStyle: "italic" }}> &</span> OUR
          SERVICES
        </h3>
      )}
      <div className={classes.content}>
        <div xs={2} className={classes.containerButton}>
          {/* <div
            className={classes.button}
            onMouseEnter={() => setIsShownNext(true)}
            onMouseLeave={() => setIsShownNext(false)}
          >
            <ArrowIconNext isShownNext={isShownNext} />
          </div> */}
        </div>

        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`mySwiper2 ${classes.swiper}`}
        >
          <SwiperSlide>
            <div xs={8}>
              <div className={classes.containerCard}>
                {serviceList?.slice(0, 6).map((item, index) => {
                  return (
                    <div
                      className={classes.containerItem}
                      data-aos="fade-up"
                      data-aos-easing="ease"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                      key={index}
                    >
                      <ServiceCard service={item} index={index + 1} />
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
          {serviceList.length > 6 && (
            <SwiperSlide>
              <div xs={8}>
                <div className={classes.containerCard}>
                  {serviceList?.slice(6, 12).map((item, index) => {
                    return (
                      <div
                        className={classes.containerItem}
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        key={index}
                      >
                        <ServiceCard service={item} index={index + 1} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          )}
          {serviceList.length > 12 && (
            <SwiperSlide>
              <div xs={8}>
                <div className={classes.containerCard}>
                  {serviceList?.slice(12, 18).map((item, index) => {
                    return (
                      <div
                        className={classes.containerItem}
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                        data-aos-delay="200"
                        key={index}
                      >
                        <ServiceCard service={item} index={index + 1} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </SwiperSlide>
          )}

          <div className=" button-next  next">
            <svg
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
          <div className=" button-prev  prev">
            <svg
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
        </Swiper>
        {/* <Swiper>
            <SwiperSlide>
              <div className={classes.containerCard}>
                {serviceList?.map((item, index) => {
                  return (
                    <div
                      className={classes.containerItem}
                      data-aos="fade-up"
                      data-aos-easing="ease"
                      data-aos-duration="1000"
                      data-aos-delay="200"
                      key={index}
                    >
                      <ServiceCard service={item} index={index + 1} />
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          </Swiper> */}

        {/* <div
              className={classes.containerItem}
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <ServiceCard2 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <ServiceCard3 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <ServiceCard4 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <ServiceCard5 />
            </div>
            <div
              className={classes.containerItem}
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <ServiceCard6 />
            </div> */}

        <div xs={2} className={classes.containerButton}>
          {/* <div
            className={classes.button}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <ArrowIconPre isShown={isShown} />
          </div> */}
        </div>
      </div>
      <Quotes />
    </div>
  );
};

export default Service;
