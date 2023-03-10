import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import Hero from "../../components/project/Hero";
import ProjectCard from "../../components/project/ProjectCard";
import ScrollToTop from "react-scroll-to-top";
import axios from "axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  content: {
    marginBottom: "6rem",
    position: "relative",
  },
  main: {
    display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    gap: "30px",
    padding: "0 10px",
    width: "1280px",
    margin: "0 auto",
  },
  sidebar: {
    flex: 1,
    // backgroundColor: "#fe5600",
    height: "600px",
    position: "sticky",
    top: "130px",
  },
  projectContainer: {
    flex: 3,
  },
  containerCard: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "30px",
    justifyContent: "center",
    paddingBottom: "3rem",
  },
  titleContainer: {
    borderBottom: "1px solid",
    height: "80px",
    marginBottom: "20px",
    fontStyle: "italic",
    "& h2": {
      fontSize: "32px",
    },
    "& h4": {
      fontSize: "20px",
      fontWeight: "600",
      textAlign: "justify",
    },
  },
  subList: {
    width: "70%",
    margin: "0 0 auto auto",
    color: "#999",
    "& li": {
      fontWeight: "normal",
    },
  },
  list: {
    "& > li": {
      fontWeight: "bold",
      margin: "10px auto",
      fontSize: "14px",
      cursor: "pointer",
      "&:hover": {
        color: "#fe5600",
      },
    },
  },
  title: {
    textAlign: "center",
    margin: "70px auto 70px",
    fontSize: "30px",
    fontWeight: "normal",
  },
  "@media (max-width: 1024px)": {
    content: {
      marginBottom: "6rem",
      position: "relative",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      gap: "10px",
      padding: "0 10px",
      width: "100%",
      margin: "0 auto",
    },
    sidebar: {
      display: "none",
    },
    projectContainer: {
      flex: 3,
    },
    containerCard: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: "1rem",
      justifyContent: "center",
      paddingBottom: "0rem",
    },
    titleContainer: {
      display: "none",
    },
    subList: {
      width: "70%",
      margin: "0 0 auto auto",
      color: "#999",
      "& li": {
        fontWeight: "normal",
      },
    },
    list: {
      "& > li": {
        fontWeight: "bold",
        margin: "10px auto",
        fontSize: "14px",
        cursor: "pointer",
        "&:hover": {
          color: "#fe5600",
        },
      },
    },
    title: {
      // display: "none",
      fontSize: "24px",
    },
  },
  "@media (max-width: 640px)": {
    content: {
      marginBottom: "6rem",
      position: "relative",
    },
    main: {
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      gap: "10px",
      padding: "0 10px",
      width: "100%",
      margin: "0 auto",
    },
    sidebar: {
      display: "none",
    },
    projectContainer: {
      flex: 3,
    },
    containerCard: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1rem",
      justifyContent: "center",
      paddingBottom: "0rem",
    },
    titleContainer: {
      display: "none",
    },
    subList: {
      width: "70%",
      margin: "0 0 auto auto",
      color: "#999",
      "& li": {
        fontWeight: "normal",
      },
    },
    list: {
      "& > li": {
        fontWeight: "bold",
        margin: "10px auto",
        fontSize: "14px",
        cursor: "pointer",
        "&:hover": {
          color: "#fe5600",
        },
      },
    },
    title: {
      // display: "none",
      fontSize: "20px",
      textAlign: "center",
      margin: "-20px auto 30px",
      fontWeight: "normal",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [data, setData] = useState([]);
  // const [query, setQuery] = useState('');
  const lang = useSelector((state) => state.lang.lang);
  let [category, setcategory] = useState([]);
  useEffect(() => {
    axios.get("http://themoderntouch.co:8000/v1/category").then((response) => {
      setcategory(response.data);
      // console.log(response.data)
    });
  }, []);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        `http://themoderntouch.co:8000/v1/project?genre=${filter}&search=${search}`
      );
      setData(res.data);
      // console.log(res.data);
    };
    // console.log(search);
    fetchProjects();
  }, [filter, search]);

  const renderCard = () => {
    return data.map((project, key) => {
      return (
        <ProjectCard
          index={key}
          path={project._id}
          key={key}
          imgProject={project.cover}
          timeProject={lang ? project.translations.vi.city : project.city}
          styleProject={lang ? project.translations.vi.style : project.style}
          nameProject={project.name}
        />
      );
    });
  };
  // const renderAllCard = () => {
  //   return data.map((project, key) => {
  //     return (

  //       <ProjectCard
  //         index={key}
  //         path={project._id} key={key} imgProject={project.images[0]} timeProject={project.city} styleProject={project.style} nameProject={project.name} />

  //     )
  //   })
  // }
  return (
    <div>
      <div className={classes.content}>
        <Hero />
        <div>
          <div
            className={classes.title}
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          //  data-aos-delay={item.id * 200}
          >
            <p>
              {lang
                ? "KHÁM PHÁ CÁC DỰ ÁN CỦA CHÚNG TÔI"
                : "DISCOVER OUR FEATURED PROJECTS"}
            </p>
          </div>
          <div className={classes.main}>
            <div className={classes.sidebar}>
              <div
                className={classes.titleContainer}
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h2>{lang ? "DANH MỤC DỰ ÁN" : "OUR PROJECTS"}</h2>
              </div>
              <div>
                <ul className={classes.list}>
                  {category.map((item, index) => {
                    return (
                      <li
                        data-aos="fade-up"
                        data-aos-easing="ease"
                        data-aos-duration="1000"
                        data-aos-delay={`${400 + index * 100}`}
                        onClick={() => {
                          setFilter(`${index + 1}`);
                        }}
                        style={
                          filter === `${index + 1}`
                            ? { color: "#fe5600" }
                            : null
                        }
                        key={index}
                      >
                        {lang ? item.viname : item.name}
                      </li>
                    );
                  })}
                  {/* <li data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  onClick={() => { setFilter('1') }}
                  style={filter === '1' ? { color: "#fe5600" } : null}
                >
                  {lang ? "Quản Lý Công Trình & Triển Khai Revit" : "Project Management & Documentation Support"}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  onClick={() => { setFilter('2') }}
                  style={filter === '2' ? { color: "#fe5600" } : null}
                >
                  {lang ? "Khách Sạn & Khu Nghỉ Dưỡng" : "Hotel & Resort"}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                  onClick={() => { setFilter('3') }}
                  style={filter === '3' ? { color: "#fe5600" } : null}
                >
                  {lang ? "Khu Phức Hợp Căn Hộ Cao Cấp & Văn Phòng" : "Complex Condominium & Office"}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                  onClick={() => { setFilter('4') }}
                  style={filter === '4' ? { color: "#fe5600" } : null}
                >
                  {lang ? "Công Trình Dân Dụng" : "Residential"}
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                  onClick={() => { setFilter('5') }}
                  style={filter === '5' ? { color: "#fe5600" } : null}
                >
                  {lang ? "Spa, Nhà Hàng Trung Tâm Thương Mại" : "Spa, Restaurant & Commercial"}
                </li> */}
                  <li
                    data-aos="fade-up"
                    data-aos-easing="ease"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                    onClick={() => {
                      setFilter("");
                    }}
                    style={filter === "" ? { color: "#fe5600" } : null}
                  >
                    {lang ? "Tất cả dự án" : "All Projects"}
                  </li>
                </ul>
              </div>
              <div
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                <input
                  style={{
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "20px",
                    padding: "4px 30px",
                    marginTop: "10px",
                    fontStyle: "italic",
                  }}
                  type="text"
                  placeholder={lang ? "Tìm kiếm theo tên" : "Search ..."}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className={classes.projectContainer}>
              <div
                className={classes.titleContainer}
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h4>
                  {lang
                    ? " Một vài dự án tiêu biểu mà chúng tôi đã và đang thực hiện trên hành trình theo đuổi sứ mệnh kiến tạo chất lượng cuộc sống cho mỗi khách hàng."
                    : "Some selected projects that we have and are fulfilling on our journey to pursue the mission of building quality of life for each client."}
                </h4>
              </div>
              <div className={classes.containerCard}>{renderCard()}</div>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe title="The Modern Touch"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.370147910966!2d106.69130261490339!3d10.
    78293636202182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f31496cd4c1%3A0x334faefa1d508eff!
    2zMjAwIFBhc3RldXIsIFBoxrDhu51uZyA2LCBRdeG6rW4gMywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e
    0!3m2!1svi!2s!4v1670475356655!5m2!1svi!2s"
      width="100%" height={450} style={{ border: 0, filter: "grayScale(100%)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
      <Footer />
      <ScrollToTop smooth color="#fe5600" style={{ borderRadius: "50%" }} />
    </div>
  );
};

export default Projects;
