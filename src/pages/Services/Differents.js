import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TitleService from "./TitleService";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "1280px",
    margin: "3rem auto",
    fontFamily: "Times New Roman",
    textAlign: "center",
  },
  differents: {
    display: "grid",
    // flexWrap: "wrap",
    gap: "80px",
    rowGap: "20px",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  serviceItem: {
    // flex: "0 0 33.33%",
    // width: "33.33%",
    // padding: "15px"
    // paddingTop: "10px",
    // paddingBottom: "10px",
  },
  title: {
    textAlign: "center",
    fontStyle: "italic",
    minHeight: "auto",
    fontSize: "23px",
    fontWeight: "normal",
    marginBottom: "1rem",
  },
  "@media (max-width: 1024px)": {
    container: {
      width: "100%",
      margin: "3rem auto",
      fontFamily: "Times New Roman",
      textAlign: "center",
      padding: "0 1rem",
    },
    differents: {
      display: "grid",
      // flexWrap: "wrap",
      gap: "80px",
      rowGap: "20px",
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    serviceItem: {
      // flex: "0 0 33.33%",
      // width: "33.33%",
      // padding: "15px"
      // paddingTop: "10px",
      // paddingBottom: "10px",
    },
    title: {
      textAlign: "center",
      fontStyle: "italic",
      minHeight: "auto",
      fontSize: "23px",
      fontWeight: "normal",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      width: "100%",
      margin: "0 auto",
      fontFamily: "Times New Roman",
      textAlign: "center",
      padding: "0 1rem",
      marginBottom: "2rem",
    },
    differents: {
      display: "grid",
      // flexWrap: "wrap",
      gap: "20px",
      rowGap: "20px",
      gridTemplateColumns: "1fr",
    },
    title: {
      minHeight: "auto",
    },
  },
}));
const Differents = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  const [diffList, setDiffList] = useState([]);
  useEffect(() => {
    axios.get("http://themoderntouch.co:8000/v1/different").then((response) => {
      setDiffList(response.data);
      // console.log(response.data)
    });
  }, []);
  // console.log(diffList.slice(6, 12));
  return (
    <div className={classes.container}>
      <div>
        <TitleService />
      </div>
      <Swiper
        loop={diffList > 6 ? true : false}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={classes.differents}>
            {diffList.slice(0, 6).map((service, key) => {
              return (
                <div
                  className={classes.serviceItem}
                  key={key}
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay={`${key * 50}`}
                >
                  <h2
                    className={classes.title}
                    dangerouslySetInnerHTML={{
                      __html: lang ? service.viTitle : service.title,
                    }}
                  />

                  {/* {service.title2 ?
                                    <h2 className={classes.title}>{lang ? service.vititle1 : service.title1}
                                        <br />{"& " + (lang ? service.vititle2 : service.title2)}
                                    </h2>
                                    :
                                    <h2 className={classes.title} >{lang ? service.vititle1 : service.title1}

                                    </h2>
                                } */}
                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      textAlignLast: "center",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: lang
                        ? service.viDescription
                        : service.description,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        {diffList.length > 6 && (
          <SwiperSlide>
            <div className={classes.differents}>
              {diffList.slice(6, 12).map((service, key) => {
                return (
                  <div
                    className={classes.serviceItem}
                    key={key}
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                    data-aos-delay={`${key * 50}`}
                  >
                    <h2
                      className={classes.title}
                      dangerouslySetInnerHTML={{
                        __html: lang ? service.viTitle : service.title,
                      }}
                    />

                    {/* {service.title2 ?
                                    <h2 className={classes.title}>{lang ? service.vititle1 : service.title1}
                                        <br />{"& " + (lang ? service.vititle2 : service.title2)}
                                    </h2>
                                    :
                                    <h2 className={classes.title} >{lang ? service.vititle1 : service.title1}

                                    </h2>
                                } */}
                    <p
                      style={{
                        textAlign: "justify",
                        fontSize: "14px",
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: lang
                          ? service.viDescription
                          : service.description,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        )}
        {diffList.length > 12 && (
          <SwiperSlide>
            <div className={classes.differents}>
              {diffList.slice(12, 18).map((service, key) => {
                return (
                  <div
                    className={classes.serviceItem}
                    key={key}
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                    data-aos-delay={`${key * 50}`}
                  >
                    <h2
                      className={classes.title}
                      dangerouslySetInnerHTML={{
                        __html: lang ? service.viTitle : service.title,
                      }}
                    />

                    {/* {service.title2 ?
                                    <h2 className={classes.title}>{lang ? service.vititle1 : service.title1}
                                        <br />{"& " + (lang ? service.vititle2 : service.title2)}
                                    </h2>
                                    :
                                    <h2 className={classes.title} >{lang ? service.vititle1 : service.title1}

                                    </h2>
                                } */}
                    <p
                      style={{
                        textAlign: "justify",
                        fontSize: "14px",
                        textAlignLast: "center",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: lang
                          ? service.viDescription
                          : service.description,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Differents;
