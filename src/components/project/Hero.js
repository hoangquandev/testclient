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
                {lang ? "Xem thêm" : "Read More"}
              </Link>
            </div>
          </div>
        );
      })}
      {/* <div className={classes.container}>
                <img className={classes.img} src={banner2} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Tri Viet Hoi An Resort</h2>
                    <p>{lang ? "Công trình có vị trí liền kề biển, nổi bật với phong cách mang âm hưởng kiến trúc Hội An. Các vật liệu địa phương được lựa chọn sử dụng cho công trình này đều có bề mặt hoàn thiện thô ráp, mộc mạc và gần gũi. Đặc biệt, phần nội thất rất ấn tượng khi là sự kết hợp của nhiều nền văn hóa, kết nối với nhau thông qua không gian rộng rãi, có đủ cây xanh, hồ nước - càng làm tăng cảm giác thư giãn và thoải mái." : "The work is located adjacent to the sea, featuring Hoi An showcased architecture style. The selected local materials used for this work have all the surface finishing rustic, rough and close. In particular, the interior is very impressive because it is the combination of many styles of cultures connecting to each other through the spacious greenery and watering space which increases the feeling of relaxation and comfort"}</p>
                    <Link className={classes.button}
                        to={`/projects/63c0ccde4d6c05be13c5dc44`}
                    >
                        {lang ? "Xem thêm" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner3} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Sunrise Resort</h2>
                    <p>{lang ? "Với vị trí nằm sát bờ biển, Sunrise Resort có tạo hình như hai cánh buồm lớn vươn mình ra đại dương bao la để đón trọn ánh bình minh. Công trình là sự kết hợp đầy tinh tế giữa nét hiện đại, sang trọng như đến từ tương lai khi được bao bọc bởi hệ thống tường kính cùng nét gần gũi, hòa quyện với cảnh quan thiên nhiên hùng vĩ." : "Having the location close to the coast, Sunrise Resort is shaped like two large sails reaching out to the ocean to catch the sunrise. The project is a delicate combination of modern features like coming from the future because it is surrounded by a system of glass walls and closeness, blending with the majestic natural landscape."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbb2a672590765d9df0592`}
                    >
                        {lang ? "Xem thêm" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner4} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Calla Apartment Quy Nhon</h2>
                    <p>{lang ? "Calla Apartment Quy Nhơn là một dự án đón đầu xu thế tọa lạc tại vị trí “vàng” trung tâm thành phố biển Quy Nhơn. Hòa mình vào xu hướng trải nghiệm cuộc sống hoàn mỹ kiểu mới mang đến cho cư dân sở hữu căn hộ những trải nghiệm đẳng cấp và tiện nghI." : "The CALLA is a trend-catching project located in the 'golden' position in the center of Quy Nhon coastal city. Immerse yourself in the trend of experiencing a new perfect life, giving apartment owners high-class and comfortable experiences."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbb30272590765d9df0594`}
                    >
                        {lang ? "Xem thêm" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner5} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Nam Viet A Villa</h2>
                    <p>{lang ? "Quy mô của không gian sống khá bề thế với diện tích xây dựng gần 1.500 m2 và hơn 6.000 m2 dành cho các sở thích, không gian sinh hoạt ngoài trời: Sân vườn, hồ bơi, hồ cá koi, garage…, tạo nên công trình kiến trúc và nội thất mới lạ, mang tính đột phá nhưng vẫn phù hợp với môi trường và quan điểm sống của gia chủ. Những góc nhìn bên ngoài từ hồ bơi vào phòng khách dường như xuyên thấu đến tận bên kia khu vườn, tạo nên bức tranh sống động và đầy màu sắc thiên nhiên." : "The scale of living space is quite superficially enormous with a construction area near 1,500 m² and over 6,000 m² for hobbies and outdoor living space such as a garden, swimming pool, indoor koi fish, garage... All of them create structures and new interior breakthroughs but remain consistent with the environment and life concept of homeowners. The outside views from the swimming pool into the living room seem to penetrate to the other side of the garden, creating a vivid and colorful picture of nature."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbbddd72590765d9df05c8`}
                    >
                        {lang ? "Xem thêm" : "Read More"}
                    </Link>
                </div>
            </div>
            <div className={classes.container}>
                <img className={classes.img} src={banner6} alt='banner' />
                <div className={classes.buttonContainer}>
                    <h2>Diamond Villa</h2>
                    <p>{lang ? "Nhìn từ bên ngoài, biệt thự Diamond nổi bật với thiết kế ấn tượng cùng tạo hình kim cương đầy sang trọng kết hợp chất liệu bê tông trần và kính mảng lớn mang lại sự đơn giản và đẳng cấp cho gia chủ. Ngoài ra, điểm nhấn thiết kế là “phòng ngủ trên mây” mang lại trải nghiệm rất mới lạ và đặc biệt." : "Seen from the outside, this project stands out with its impressive design and luxurious diamond shape, featuring an image of bare concrete and glass materials to bring simple but really high class to the owner. In addition, the design highlight is the 'bedroom in the clouds' which brings a very new and special experience."}</p>
                    <Link className={classes.button}
                        to={`/projects/63bbb15072590765d9df058c`}
                    >
                        {lang ? "Xem thêm" : "Read More"}
                    </Link>
                </div>
            </div> */}
    </Slider>
  );
};

export default Hero;
