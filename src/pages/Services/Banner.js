import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemService from "./ItemService";
import image1 from "../../assets/images/services/servicebanner/service-1.png";
import image2 from "../../assets/images/services/servicebanner/service-2.png";
import image3 from "../../assets/images/services/servicebanner/service-3.png";
import image4 from "../../assets/images/services/servicebanner/service-4.png";
import image5 from "../../assets/images/services/servicebanner/service-5.png";
import image6 from "../../assets/images/services/servicebanner/service-6.png";
import imageSelect1 from "../../assets/images/services/servicebanner/service-1a.png";
import imageSelect2 from "../../assets/images/services/servicebanner/service-2a.png";
import imageSelect3 from "../../assets/images/services/servicebanner/service-3a.png";
import imageSelect4 from "../../assets/images/services/servicebanner/service-4a.png";
import imageSelect5 from "../../assets/images/services/servicebanner/service-5a.png";
import imageSelect6 from "../../assets/images/services/servicebanner/service-6a.png";
import { makeStyles } from "@mui/styles";
import BannerItem from "./BannerItem";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./button.css";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    // height: "690px",
  },
  itemContainer: {
    width: "1280px",
    position: "relative",
    height: "140px",
  },
  slider: {
    height: "600px",
  },
  swiper: {
    width: "1450px",
    // height: "573.626px",
  },
  "@media (max-width: 1024px)": {
    bannerContainer: {
      height: "auto",
    },
    itemContainer: {
      width: "100%",
      position: "relative",
      padding: "0 24px",
      marginTop: "-25px",
      height: "auto",
    },
    slider: {
      height: "100%",
    },
    swiper: {
      width: "100%",
    },
  },
  "@media (max-width: 640px)": {
    itemContainer: {
      width: "100%",
      position: "relative",
      padding: "0 24px",
      marginTop: "-350px",
      marginBottom: "20rem",
    },
    slider: {
      height: "100%",
    },
    swiper: {
      width: "100%",
    },
  },
}));
const Banner = ({ setLoading }) => {
  const classes = useStyles();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [serviceList, setServiceList] = useState([]);
  // const [loading, setLoading] = useState(true)
  const images = [image1, image2, image3, image4, image5, image6];
  const imageSelects = [
    imageSelect1,
    imageSelect2,
    imageSelect3,
    imageSelect4,
    imageSelect5,
    imageSelect6,
  ];
  const [indexActive, setIndexActive] = useState(0);

  // setLoading(true)
  useEffect(() => {

    const url = "http://themoderntouch.co:8000/v1";
    axios.get(`${url}/service`).then((response) => {
      setServiceList(response.data);
      setLoading(false)
    });
  }, []);


  return (
    <>
      <div
        style={{ position: "relative", margin: "0 auto" }}
        className={classes.bannerContainer}
      >
        <Swiper
          // onSwiper={setSwiper}
          // style={{
          //     // "--swiper-navigation-color": "#000",
          //     // "--swiper-pagination-color": "#000",
          //     width: "1450px"
          // }}
          // className={ }
          loop={true}
          spaceBetween={10}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`mySwiper2 ${classes.swiper}`}
          onSlideChange={(swiper) => setIndexActive(swiper.activeIndex)}
        >
          {serviceList.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <BannerItem
                  item={item}
                  image={serviceList[index]}
                  index={index}
                />
              </SwiperSlide>
            );
          })}

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
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={classes.itemContainer}
      >
        {serviceList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <ItemService
                item={item}
                image={serviceList[index]}
                index={index + 1}
                indexActive={indexActive}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Banner;
