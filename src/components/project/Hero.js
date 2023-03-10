import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom's
import Slider from "react-slick";
// import projectList from '../../utils/project.json'

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "calc(100vh - 124px)",
    position: "relative",
  },
  img: {
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  buttonContainer: {
    position: "absolute",
    bottom: "100px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    textAlign: "center",
    fontFamily: "Times New Roman",
    "& p": {
      margin: "20px auto",
      fontSize: "16px",
      fontStyle: "italic",
    },
    "& h2": {
      fontSize: "60px",
    },
  },
  button: {
    border: "1px solid white",
    color: "white",
    borderRadius: "20px",
    padding: "2px 30px",
  },
  "@media (max-width: 640px)": {
    container: {
      height: "300px",
      position: "relative",
      width: "100vw",
    },
    img: {
      width: "100%",
    },
    buttonContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      color: "white",
      textAlign: "center",
      fontFamily: "Times New Roman",
      "& p": {
        display: "none",
      },
      "& h2": {
        fontSize: "20px",
        marginBottom: "10px",
      },
    },
    button: {
      border: "1px solid white",
      color: "white",
      borderRadius: "20px",
      padding: "2px 10px",
      fontStyle: "italic",
    },
    slide: {
      height: "300px",
      marginTop: "-3rem",
    },
  },
}));

const Hero = ({ thumbnailList }) => {
  const [select, setSelect] = useState(null);
  const [banner, setBanner] = useState([]);
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    // pauseOnHover: false
    // draggable: false,
    dots: false,
  };
  const handleReadMore = (index) => {
    setSelect(index);
  };
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        "http://themoderntouch.co:8000/v1/project/banner"
      );
      setBanner(res.data);
      // console.log(res.data);
    };
    fetchProjects();
    // console.log(search);
  }, []);
  const lang = useSelector((state) => state.lang.lang);
  // const bannerList = [banner1, banner2, banner3, banner4, banner5, banner6]
  return (
    <Slider {...settings} className={classes.slide}>
      {banner.map((item, index) => {
        return (
          <div key={index} className={classes.container}>
            <img className={classes.img} src={item.banner} alt="banner" />
            <div className={classes.buttonContainer}>
              <h2>{item.name}</h2>
              <p>
                {" "}
                {lang ? item.translations.vi.description : item.description}
              </p>
              <Link className={classes.button} to={`/projects/${item._id}`}>
                {lang ? "Xem th??m" : "Read More"}
              </Link>
            </div>
          </div>
        );
      })}
      {/* <div className={classes.container}>
                <img className={classes.img} src={banner2} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Tri Viet Hoi An Resort</h2>
                    <p>{lang ? "C??ng tr??nh c?? v??? tr?? li???n k??? bi???n, n???i b???t v???i phong c??ch mang ??m h?????ng ki???n tr??c H???i An. C??c v???t li???u ?????a ph????ng ???????c l???a ch???n s??? d???ng cho c??ng tr??nh n??y ?????u c?? b??? m???t ho??n thi???n th?? r??p, m???c m???c v?? g???n g??i. ?????c bi???t, ph???n n???i th???t r???t ???n t?????ng khi l?? s??? k???t h???p c???a nhi???u n???n v??n h??a, k???t n???i v???i nhau th??ng qua kh??ng gian r???ng r??i, c?? ????? c??y xanh, h??? n?????c - c??ng l??m t??ng c???m gi??c th?? gi??n v?? tho???i m??i." : "The work is located adjacent to the sea, featuring Hoi An showcased architecture style. The selected local materials used for this work have all the surface finishing rustic, rough and close. In particular, the interior is very impressive because it is the combination of many styles of cultures connecting to each other through the spacious greenery and watering space which increases the feeling of relaxation and comfort"}</p>
                    <Link className={classes.button}
                        to={`/projects/63c0ccde4d6c05be13c5dc44`}
                    >
                        {lang ? "Xem th??m" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner3} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Sunrise Resort</h2>
                    <p>{lang ? "V???i v??? tr?? n???m s??t b??? bi???n, Sunrise Resort c?? t???o h??nh nh?? hai c??nh bu???m l???n v????n m??nh ra ?????i d????ng bao la ????? ????n tr???n ??nh b??nh minh. C??ng tr??nh l?? s??? k???t h???p ?????y tinh t??? gi???a n??t hi???n ?????i, sang tr???ng nh?? ?????n t??? t????ng lai khi ???????c bao b???c b???i h??? th???ng t?????ng k??nh c??ng n??t g???n g??i, h??a quy???n v???i c???nh quan thi??n nhi??n h??ng v??." : "Having the location close to the coast, Sunrise Resort is shaped like two large sails reaching out to the ocean to catch the sunrise. The project is a delicate combination of modern features like coming from the future because it is surrounded by a system of glass walls and closeness, blending with the majestic natural landscape."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbb2a672590765d9df0592`}
                    >
                        {lang ? "Xem th??m" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner4} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Calla Apartment Quy Nhon</h2>
                    <p>{lang ? "Calla Apartment Quy Nh??n l?? m???t d??? ??n ????n ?????u xu th??? t???a l???c t???i v??? tr?? ???v??ng??? trung t??m th??nh ph??? bi???n Quy Nh??n. H??a m??nh v??o xu h?????ng tr???i nghi???m cu???c s???ng ho??n m??? ki???u m???i mang ?????n cho c?? d??n s??? h???u c??n h??? nh???ng tr???i nghi???m ?????ng c???p v?? ti???n nghI." : "The CALLA is a trend-catching project located in the 'golden' position in the center of Quy Nhon coastal city. Immerse yourself in the trend of experiencing a new perfect life, giving apartment owners high-class and comfortable experiences."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbb30272590765d9df0594`}
                    >
                        {lang ? "Xem th??m" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner5} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Nam Viet A Villa</h2>
                    <p>{lang ? "Quy m?? c???a kh??ng gian s???ng kh?? b??? th??? v???i di???n t??ch x??y d???ng g???n 1.500 m2 v?? h??n 6.000 m2 d??nh cho c??c s??? th??ch, kh??ng gian sinh ho???t ngo??i tr???i: S??n v?????n, h??? b??i, h??? c?? koi, garage???, t???o n??n c??ng tr??nh ki???n tr??c v?? n???i th???t m???i l???, mang t??nh ?????t ph?? nh??ng v???n ph?? h???p v???i m??i tr?????ng v?? quan ??i???m s???ng c???a gia ch???. Nh???ng g??c nh??n b??n ngo??i t??? h??? b??i v??o ph??ng kh??ch d?????ng nh?? xuy??n th???u ?????n t???n b??n kia khu v?????n, t???o n??n b???c tranh s???ng ?????ng v?? ?????y m??u s???c thi??n nhi??n." : "The scale of living space is quite superficially enormous with a construction area near 1,500 m?? and over 6,000 m?? for hobbies and outdoor living space such as a garden, swimming pool, indoor koi fish, garage... All of them create structures and new interior breakthroughs but remain consistent with the environment and life concept of homeowners. The outside views from the swimming pool into the living room seem to penetrate to the other side of the garden, creating a vivid and colorful picture of nature."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbbddd72590765d9df05c8`}
                    >
                        {lang ? "Xem th??m" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner6} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Diamond Villa</h2>
                    <p>{lang ? "Nh??n t??? b??n ngo??i, bi???t th??? Diamond n???i b???t v???i thi???t k??? ???n t?????ng c??ng t???o h??nh kim c????ng ?????y sang tr???ng k???t h???p ch???t li???u b?? t??ng tr???n v?? k??nh m???ng l???n mang l???i s??? ????n gi???n v?? ?????ng c???p cho gia ch???. Ngo??i ra, ??i???m nh???n thi???t k??? l?? ???ph??ng ng??? tr??n m??y??? mang l???i tr???i nghi???m r???t m???i l??? v?? ?????c bi???t." : "Seen from the outside, this project stands out with its impressive design and luxurious diamond shape, featuring an image of bare concrete and glass materials to bring simple but really high class to the owner. In addition, the design highlight is the 'bedroom in the clouds' which brings a very new and special experience."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbb15072590765d9df058c`}
                    >
                        {lang ? "Xem th??m" : "Read More"}
                    </Link>
                </div>
            </div> */}
    </Slider>
  );
};

export default Hero;
