import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { useSelect } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
// import lang from "../languages/en";
import language from "../languages/en";
import { changeLang } from "../redux/langSlice";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  serbox: {
    display: "none",
  },
  header: {
    position: "sticky",
    top: "0px",
    left: "0px",
    margin: "0 auto",
    zIndex: 1000,
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 12px",
  },
  container: {
    maxWidth: "100%",
    width: 1280,
    margin: "0 auto",
    position: "relative",
    height: 100,
    // transform: "translateX(-36px)"
  },
  mainMenu: {
    width: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
  },
  logoArea: {
    width: "100px",
    height: "100px",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 1000,
  },
  imageLogo: {
    maxWidth: "100%",
    marginTop: "13px",
  },
  navbar: {
    listStyle: "none",
    textAlign: "right",

    "& *": {
      float: "none",
      display: "inline-block",
      "&:nth-child(1)": {
        float: "left",
      },
      "&:nth-child(2)": {
        float: "left",
      },
      "&:nth-child(3)": {
        float: "left",
      },
      "& *": {
        color: "#000",
        fontSize: "20px",
        fontFamily: "Times New Roman",
        fontStyle: "normal",
        textTransform: "uppercase",
        textDecoration: "none",
        display: "block",
        padding: "10px 40px",
      },
    },
  },
  menuMobile: {
    display: "none",
  },
  menu: {
    display: "none",
  },
  "@media (max-width: 1280px)": {
    container: {
      width: 1200,
    },
    navbar: {
      "& *": {
        "& *": {
          fontSize: "20px",
          padding: "10px 20px",
          fontWeight: "bold",
        },
      },
    },
  },
  "@media (max-width: 1024px)": {
    container: {
      maxWidth: "100%",
      width: 960,
      margin: "0 auto",
      height: 90,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 24px",
    },
    logoArea: {
      width: "80px",
      height: "80px",
      position: "relative",
      // paddingLeft: "20px",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
    },
    imageLogo: {
      marginTop: "0",
    },
    menuMobile: {
      display: "flex",
      justifyContent: "center",
      marginRight: "32px"
    },
    navbar: {
      display: "none",
    },
    menu: {
      display: "block",
      position: "absolute",
      backgroundColor: "#fff",
      height: "calc(100vh - 90px)",
      width: "100vw",
      top: "90px",
      left: "0",
      padding: "20px 20px",
      transition: "all 0.5s ease",
      zIndex: 10,
    },
    navMenu: {
      lineHeight: "20px",
      fontSize: "16px",
      "& *": {
        textTransform: "uppercase",
        margin: "10px auto",
      },
    },
  },
  "@media (max-width: 640px)": {
    serbox: {
      display: "block",
      position: "absolute",
      backgroundColor: "#fff",
      height: "calc(100vh - 90px)",
      width: "100vw",
      top: "90px",
      left: "0px",
      padding: "20px 35px",
      transition: "all 0.5s ease",
      overflow: "scroll",
      zIndex: 100,
    },
    searchItem: {
      margin: "4px auto",
      borderBottom: "1px solid #ccc",
    },
    header: {},
    container: {
      maxWidth: "100%",
      width: "100%",
      margin: " 0 auto",
      height: 90,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0",
    },
    logoArea: {
      width: "80px",
      height: "80px",
      position: "relative",
      // paddingLeft: "20px",
      top: "50%",
      left: "34px",
      transform: "translateY(-50%)",
      backgroundColor: "white",
      zIndex: 1000,
    },
    imageLogo: {
      marginTop: "4px",
    },
    menuMobile: {
      display: "flex",
      justifyContent: "center",
      zIndex: 1000,
    },
    navbar: {
      display: "none",
    },
    menu: {
      display: "block",
      position: "absolute",
      backgroundColor: "#fff",
      height: "calc(100vh - 90px)",
      width: "100vw",
      top: "90px",
      left: "0px",
      padding: "20px 35px",
      transition: "all 0.5s ease",
      zIndex: 10,
    },
    navMenu: {
      lineHeight: "20px",
      fontSize: "16px",
      "& *": {
        textTransform: "uppercase",
        margin: "10px auto",
      },
    },
  },
  input: {
    borderRadius: "30px",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
    width: "80%",
    textAlign: "center",
    padding: "10px 10%",
    marginTop: "10px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [logo, setLogo] = useState("");
  const [about, setabout] = useState("");
  const [viabout, setviabout] = useState("");
  const [service, setservice] = useState("");
  const [viservice, setviservice] = useState("");
  const [project, setproject] = useState("");
  const [viproject, setviproject] = useState("");
  const [news, setnews] = useState("");
  const [vinews, setvinews] = useState("");
  const [career, setcareer] = useState("");
  const [vicareer, setvicareer] = useState("");
  const [contact, setcontact] = useState("");
  const [vicontact, setvicontact] = useState("");
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);
  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );
        setLogo(res.data.logoHeader);
        setabout(res.data.about);
        setviabout(res.data.viabout);
        setservice(res.data.service);
        setviservice(res.data.viservice);
        setproject(res.data.project);
        setviproject(res.data.viproject);
        setnews(res.data.news);
        setvinews(res.data.vinews);
        setcareer(res.data.career);
        setvicareer(res.data.vicareer);
        setcontact(res.data.contact);
        setvicontact(res.data.vicontact);
      } catch (error) {
        // dispatch(getProjectListError());
        // toast.error('Kết nối server thất bại! Hảy load lại trang', {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      }
    };
    getDetailApi();
  }, []);

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
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
  const [show, setShow] = useState(false);
  const lang = useSelector((state) => state.lang.lang);
  const langHeader = !lang ? language.en.header : language.vi.header;
  const [langText, setLangText] = useState(true);
  const dispatch = useDispatch();
  const handleChangeLangVi = () => {
    setLangText(true);
    dispatch(changeLang(true));
    // console.log(lang);
  };
  const handleChangeLangEn = () => {
    setLangText(false);
    dispatch(changeLang(false));
    // console.log(lang);
  };
  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logoArea}>
          <NavLink to="/">
            <img
              src={logo}
              className={classes.imageLogo}
              alt="The Modern Touch"
            />
          </NavLink>
        </div>

        <div className={classes.mainMenu}>
          <ul className={classes.navbar}>
            <li data-aos="fade-right" data-aos-duration="1000">
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
              >
                {lang ? viabout : about}
              </NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000">
              <NavLink
                to="/services"
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
              >
                {lang ? viservice : service}
              </NavLink>
            </li>
            <li data-aos="fade-right" data-aos-duration="1000">
              <NavLink
                to="/projects"
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
              >
                {lang ? viproject : project}
              </NavLink>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <NavLink
                to="/news"
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
              >
                {lang ? vinews : news}
              </NavLink>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <NavLink
                to="/careers"
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
              >
                {lang ? vicareer : career}
              </NavLink>
            </li>
            <li data-aos="fade-left" data-aos-duration="1000">
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
              >
                {lang ? vicontact : contact}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={classes.menuMobile}>
          <div onClick={handleSearch}>
            <SearchIcon fontSize="large" />
          </div>
          <div onClick={toggleMenu}>
            <MenuIcon
              fontSize="large"
              style={open ? { color: "#fe5600" } : null}
            />
          </div>
        </div>
        <div
          className={classes.menu}
          style={open ? { top: "90px" } : { top: "-100vh" }}
        >
          <ul className={classes.navMenu}>
            <li>
              <NavLink
                onClick={toggleMenu}
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
                to="/about"
              >
                {lang ? viabout : about}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
                to="/services"
              >
                {lang ? viservice : service}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
                to="/projects"
              >
                {lang ? viproject : project}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
                to="/news"
              >
                {lang ? vinews : news}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
                to="/careers"
              >
                {lang ? vicareer : career}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                style={({ isActive }) =>
                  isActive ? { color: "#fe5600" } : null
                }
                to="/contact"
              >
                {lang ? vicontact : contact}
              </NavLink>
            </li>
            <li>
              <div
                onClick={() => {
                  setShow(!show);
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  textAlign: "center",
                }}
              >
                <div
                  style={
                    !lang
                      ? {
                        textAlign: "center",
                        marginLeft: "0",
                        color: "#fe5600",
                      }
                      : { textAlign: "center", marginLeft: "0" }
                  }
                  onClick={handleChangeLangEn}
                >
                  EN
                </div>
                <ArrowDropDownIcon
                  sx={{ fontSize: 15 }}
                  style={{ marginRight: "0" }}
                />
              </div>
              <div
                style={
                  show
                    ? lang
                      ? {
                        display: "block",
                        paddingLeft: "10px",
                        color: "#fe5600",
                      }
                      : { display: "block", paddingLeft: "10px" }
                    : { display: "none" }
                }
                onClick={handleChangeLangVi}
              >
                VI
              </div>
            </li>
          </ul>
          <div
            style={{
              position: "absolute",
              bottom: "8rem",
              textAlign: "center",
              left: "50%",
              transform: "translateX(-50%)",
              width: "370px",
            }}
          >
            <h2>SIGN UP NEWSLETTERS</h2>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Enter your email to subscribe Us"
                className={classes.input}
              />
              <button
                style={{
                  border: "none",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "10px",
                  right: "10%",
                  height: "36px",
                  width: "36px",
                  boxShadow:
                    "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
                  borderRadius: "50%",
                }}
              >
                <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
        <div
          className={classes.serbox}
          style={openSearch ? { display: "block" } : { display: "none" }}
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
          <div>
            <ul>
              {data?.map((item, index) => {
                return (
                  <li
                    onClick={() => {
                      handleSearch();
                      setOpen(false);
                    }}
                    className={classes.searchItem}
                    key={index}
                  >
                    <Link to={`/projects/${item._id}`}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
