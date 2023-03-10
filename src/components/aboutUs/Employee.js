import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Thumbs } from "swiper";
import "../../pages/Services/button.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "14px",
  },
  item: {
    flex: "0 0 20%",
    maxWidth: "20%",
  },
  img: {
    maxWidth: "100%",
  },
  divImage: {
    width: "180px",
    margin: "0 auto",
  },
  name: {
    fontSize: "16px",
    position: "relative",
  },
  borderLine: {
    position: "absolute",
    borderBottom: "1px solid",
    width: "160px",
    left: "50%",
    bottom: "-7px",
    transform: "translateX(-50%)",
    "&::before": {
      content: '""',
      display: "block",
      height: 3,
      width: "30px",
      backgroundColor: "black",
      borderRadius: "10px",
      position: "absolute",
      left: "50%",
      bottom: "-2px",
      transform: "translateX(-50%)",
    },
  },
  "@media (max-width: 640px)": {
    item: {
      flex: "0 0 50%",
      maxWidth: "50%",
    },
    name: {
      fontSize: "12px",
      position: "relative",
    },
  },
}));
const Employee = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  let [employeeList, setEmployeeList] = useState([]);
  const url = "http://themoderntouch.co:8000/v1";

  useEffect(() => {
    axios.get(`${url}/employee`).then((response) => {
      setEmployeeList(response.data);
      // console.log(response.data);
    });
  }, []);
  // const langAbout = !lang ? language.en.about : language.vi.about

  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  return (
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
        <div className={classes.container}>
          {employeeList.slice(0, 10).map((item, key) => {
            return (
              <div className={classes.item} key={key}>
                <div className={classes.divImage}>
                  <img
                    data-aos="fade-up"
                    data-aos-delay={50 * key}
                    data-aos-duration="1000"
                    className={classes.img}
                    src={item.avatar}
                    alt=""
                  />
                </div>
                <div
                  className={classes.name}
                  data-aos="fade-up"
                  data-aos-delay={`${100 + 50 * key}`}
                  data-aos-duration="1000"
                >
                  <h4>{lang ? item.viname : item.name}</h4>
                  <div className={classes.borderLine}></div>
                </div>
                <p
                  data-aos="fade-up"
                  data-aos-delay={200 + 50 * key}
                  data-aos-duration="1000"
                  style={{ width: "200px", margin: " 1rem auto" }}
                >
                  {lang ? item.vijob : item.job}
                </p>
              </div>
            );
          })}
        </div>
      </SwiperSlide>
      {employeeList.length > 10 && (
        <SwiperSlide>
          <div className={classes.container}>
            {employeeList.slice(10, 20).map((item, key) => {
              return (
                <div className={classes.item} key={key}>
                  <div className={classes.divImage}>
                    <img
                      data-aos="fade-up"
                      data-aos-delay={50 * key}
                      data-aos-duration="1000"
                      className={classes.img}
                      src={item.avatar}
                      alt=""
                    />
                  </div>
                  <div
                    className={classes.name}
                    data-aos="fade-up"
                    data-aos-delay={`${100 + 50 * key}`}
                    data-aos-duration="1000"
                  >
                    <h4>{lang ? item.viname : item.name}</h4>
                    <div className={classes.borderLine}></div>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay={200 + 50 * key}
                    data-aos-duration="1000"
                    style={{ width: "200px", margin: " 1rem auto" }}
                  >
                    {lang ? item.vijob : item.job}
                  </p>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      )}
      {employeeList.length > 20 && (
        <SwiperSlide>
          <div className={classes.container}>
            {employeeList.slice(20, 30).map((item, key) => {
              return (
                <div className={classes.item} key={key}>
                  <div className={classes.divImage}>
                    <img
                      data-aos="fade-up"
                      data-aos-delay={50 * key}
                      data-aos-duration="1000"
                      className={classes.img}
                      src={item.avatar}
                      alt=""
                    />
                  </div>
                  <div
                    className={classes.name}
                    data-aos="fade-up"
                    data-aos-delay={`${100 + 50 * key}`}
                    data-aos-duration="1000"
                  >
                    <h4>{lang ? item.viname : item.name}</h4>
                    <div className={classes.borderLine}></div>
                  </div>
                  <p
                    data-aos="fade-up"
                    data-aos-delay={200 + 50 * key}
                    data-aos-duration="1000"
                    style={{ width: "200px", margin: " 1rem auto" }}
                  >
                    {lang ? item.vijob : item.job}
                  </p>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
      )}

      {/* <div className=" button-next  next"
                >
                    <svg id="Layer_1" style={{ width: "40px" }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#231f20;}" }} /></defs><path className="cls-1" d="M10.81,24.2a1.32,1.32,0,0,1,.57.12L19.73,16a.48.48,0,0,1,.68.68L12.06,25a1.32,1.32,0,0,1,.12.57,1.37,1.37,0,1,1-1.37-1.37Z" /><path className="cls-1" d="M20.08,14.18a.49.49,0,0,1-.34-.14L11.38,5.68a1.32,1.32,0,0,1-.57.12,1.37,1.37,0,1,1,1.37-1.37,1.32,1.32,0,0,1-.12.57l8.36,8.36a.5.5,0,0,1,0,.68A.51.51,0,0,1,20.08,14.18Z" /></svg>
                </div>
                <div className=" button-prev  prev"
                >
                    <svg style={{ width: "40px" }} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#231f20;}" }} /></defs><path className="cls-1" d="M19.19,24.2a1.32,1.32,0,0,0-.57.12L10.27,16a.48.48,0,0,0-.68.68L17.94,25a1.32,1.32,0,0,0-.12.57,1.37,1.37,0,1,0,1.37-1.37Z" /><path className="cls-1" d="M9.92,14.18a.49.49,0,0,0,.34-.14l8.36-8.36a1.32,1.32,0,0,0,.57.12,1.37,1.37,0,1,0-1.37-1.37,1.32,1.32,0,0,0,.12.57L9.58,13.36a.5.5,0,0,0,0,.68A.51.51,0,0,0,9.92,14.18Z" /></svg>
                </div> */}
    </Swiper>
  );
};

export default Employee;
