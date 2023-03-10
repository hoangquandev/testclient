import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";

const useStyles = makeStyles((theme) => ({
  item: {
    width: "100px",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "140px",
      height: "140px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      cursor: "pointer",
    },
    "&>p": {
      fontSize: "8px",
      fontStyle: "italic",
      padding: "10px",
      display: "none",
      position: "absolute",
      top: "-10px",
      left: "-50%",
      backgroundColor: "#000",
      borderRadius: "4px",
      textAlign: "center",
      color: "white",
    },
    "&:hover>p": {
      fontSize: "12px",
      display: "inline-block",
    },
    zIndex: 1000,
  },
  container: {
    width: "1280px",
    margin: "2rem auto",
    height: "400px",
    // display: "grid",
    // gridTemplateRows: 'repeat(10, 1fr)',
    // gridTemplateColumns: 'repeat(10, 1fr)',
  },
  containerItem: {
    margin: "2rem auto",
    height: "400px",
    display: "grid",
    gridTemplateRows: "repeat(10, 1fr)",
    gridTemplateColumns: "repeat(10, 1fr)",
  },
  "@media (max-width: 640px)": {
    container: {
      display: "none",
    },
  },
}));
const DropAndDrag = () => {
  const classes = useStyles();
  let [equipmentList, setEquipmentList] = useState([]);
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    const url = "http://themoderntouch.co:8000/v1";
    axios.get(`${url}/equipment`).then((response) => {
      setEquipmentList(response.data);
    });
  }, []);
  return (
    <div className={classes.container}>
      {/* <Swiper
                loop={true}
                spaceBetween={10}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay, Thumbs]}
                className={`mySwiper2 ${classes.swiper}`}
            >
                <SwiperSlide> */}
      <div className={classes.containerItem}>
        <Draggable defaultPosition={{ x: 577, y: 109 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[0]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[0]?.viName : equipmentList[0]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: 0, y: 83 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[1]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[1]?.viName : equipmentList[1]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: 41, y: -31 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[2]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[2]?.viName : equipmentList[2]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: 328, y: 187 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[3]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[3]?.viName : equipmentList[3]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: -35, y: 23 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[4]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[4]?.viName : equipmentList[4]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: 234, y: 186 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[5]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[5]?.viName : equipmentList[5]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: -77, y: 15 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[6]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[6]?.viName : equipmentList[6]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: -32, y: -30 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[7]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[7]?.viName : equipmentList[7]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: 3, y: 56 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[8]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[8]?.viName : equipmentList[8]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: -565, y: 284 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[9]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[9]?.viName : equipmentList[9]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: 304, y: -55 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[10]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[10]?.viName : equipmentList[10]?.name}</p>
          </div>
        </Draggable>
        <Draggable defaultPosition={{ x: 310, y: -37 }}>
          <div className={classes.item}>
            <img
              style={{ width: "100%" }}
              src={equipmentList[11]?.src}
              alt="dung cu"
            />
            <p>{lang ? equipmentList[11]?.viName : equipmentList[11]?.name}</p>
          </div>
        </Draggable>
        {equipmentList[12] && (
          <Draggable defaultPosition={{ x: -36, y: 135 }}>
            <div className={classes.item}>
              <img
                style={{ width: "100%" }}
                src={equipmentList[12]?.src}
                alt="dung cu"
              />
              <p>
                {lang ? equipmentList[12]?.viName : equipmentList[12]?.name}
              </p>
            </div>
          </Draggable>
        )}
        {equipmentList[13] && (
          <Draggable defaultPosition={{ x: 650, y: 90 }}>
            <div className={classes.item}>
              <img
                style={{ width: "100%" }}
                src={equipmentList[13]?.src}
                alt="dung cu"
              />
              <p>
                {lang ? equipmentList[13]?.viName : equipmentList[13]?.name}
              </p>
            </div>
          </Draggable>
        )}
        {equipmentList[14] && (
          <Draggable defaultPosition={{ x: -510, y: 40 }}>
            <div className={classes.item}>
              <img
                style={{ width: "100%" }}
                src={equipmentList[14]?.src}
                alt="dung cu"
              />
              <p>
                {lang ? equipmentList[14]?.viName : equipmentList[14]?.name}
              </p>
            </div>
          </Draggable>
        )}
        {equipmentList[15] && (
          <Draggable defaultPosition={{ x: 550, y: 13 }}>
            <div className={classes.item}>
              <img
                style={{ width: "100%" }}
                src={equipmentList[15]?.src}
                alt="dung cu"
              />
              <p>
                {lang ? equipmentList[15]?.viName : equipmentList[15]?.name}
              </p>
            </div>
          </Draggable>
        )}
      </div>
      {/* </SwiperSlide>
            </Swiper> */}
    </div>
  );
};

export default DropAndDrag;
