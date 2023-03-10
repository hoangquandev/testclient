import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import banner from "../../assets/images/Carreers/bannerworkinghere-1.png";
import textImage from "../../assets/images/Carreers/workinghere.png";
import Footer from "../../common/Footer";
// import careersData from '../../utils/careers.json'
import JobDirect from "./JobDirect";

const useStyles = makeStyles((theme) => ({
  banner: {
    background: `url(${banner}) no-repeat center center`,
    height: "calc(100vh - 124px)",
    backgroundSize: "cover",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "350px",
  },
  content: {
    width: "1280px",
    margin: "2rem auto",
    fontFamily: "Times New Roman",
  },
  hide: {
    display: "block",
  },
  show: {
    display: "none",
  },
  "@media (max-width: 1024px)": {
    banner: {
      background: `url(${banner}) no-repeat`,
      height: "600px",
      backgroundSize: "100% 300px",
      position: "relative",
    },
    image: {
      position: "absolute",
      top: "300px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "350px",
    },
    content: {
      width: "100%",
      margin: "2rem auto",
      fontFamily: "Times New Roman",
    },
    hide: {
      display: "none",
    },
    show: {
      display: "block",
      paddingBottom: "1rem",
      margin: "0 1rem",
    },
  },
  "@media (max-width: 640px)": {
    banner: {
      background: `url(${banner}) no-repeat`,
      height: "600px",
      backgroundSize: "100% 300px",
      position: "relative",
    },
    image: {
      position: "absolute",
      top: "300px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "350px",
    },
    content: {
      width: "100%",
      margin: "2rem auto",
      fontFamily: "Times New Roman",
    },
    hide: {
      display: "none",
    },
    show: {
      display: "block",
      paddingBottom: "1rem",
      margin: "0 1rem",
    },
  },
}));
const Careers = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  const [jobList, setJobList] = useState([]);
  const [bannerCareer, setbannerCareer] = useState("");
  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );

        setbannerCareer(res.data.bannerCareer);
      } catch (error) {
        // dispatch(getProjectListError());
      }
    };
    getDetailApi();
  }, []);

  useEffect(() => {
    axios.get("http://themoderntouch.co:8000/v1/career").then((response) => {
      setJobList(response.data);
      // console.log(response.data)
    });
  }, []);

  return (
    <div className={classes.container}>
      <div
        className={classes.banner}
        style={{ background: `url(${bannerCareer}) no-repeat center center` }}
      >
        <div className={classes.image}>
          <img style={{ width: "100%" }} src={textImage} alt="careers" />
        </div>
      </div>
      <div className={classes.content}>
        <p
          className={classes.hide}
          style={{
            paddingLeft: "25%",
            paddingBottom: "2rem",
            fontStyle: "italic",
            fontSize: "16px",
          }}
        >
          {lang
            ? "Chúng tôi xây dựng môi trường làm việc và tạo điều kiện để các thành viên có cơ hội học hỏi và phát huy hết khả năng của mình, cùng đóng góp các giá trị tốt đẹp cho cộng đồng và xã hội. Hãy cùng chúng tôi tạo nên bước đột phá trong sự nghiệp."
            : "We build a working environment and create conditions for our members to have the opportunity to learn and realize their full potential, contribute values ​​to the community and society. Join us in making a breakthrough in your career path."}
          <br />
          <br />
          <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
            Email: recruitment@themoderntouch.co
          </span>
        </p>
        <p
          className={classes.show}
          style={{ fontWeight: "bold", fontStyle: "italic" }}
        >
          Email: recruitment@themoderntouch.co
        </p>
        {jobList?.map((job, key) => {
          return <JobDirect job={job} key={key} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
