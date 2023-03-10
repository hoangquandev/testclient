import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    margin: "0 auto",
    color: "white",
    background:
      "linear-gradient(180deg, rgba(91,91,91,0.46124387254901966) 100%, rgba(255,255,255,1) 100%)",
  },
  footer: {
    margin: "0 auto",
    boxSizing: "border-box",
    width: "1280px",
  },
  container: {
    height: "200px",
    borderTop: "1px solid ",
    textAlign: "center",
    fontSize: "16px",
    paddingTop: "1rem",
  },
  containerLeft: {
    textAlign: "left",
    "&>li>a": {
      color: "white",
    },
  },
  containerMobile: {
    padding: "1rem 24px",
  },
  itemMobile: {
    display: "flex",
    justifyContent: "space-between",
  },
  itemRight: {
    textAlign: "right",
    margin: "12px 0 12px 12px",
  },
  itemLeft: {
    textAlign: "left",
    margin: "12px 12px 12px 0",
  },
  newsLetter: {
    textAlign: "center",
    height: "100px",
    margin: "1rem auto",
  },
  input: {
    borderRadius: "30px",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
    width: "70%",
    textAlign: "center",
    padding: "10px 10%",
    marginTop: "10px",
    fontFamily: "Times New Roman",
    fontStyle: "italic",
  },
  "@media (max-width: 1024px)": {
    container: {
      width: "90vw",
      height: "200px",
      borderTop: "1px solid ",
      margin: "0 auto",
      padding: "0 24px",
      textAlign: "center",
      fontSize: "12px",
    },
    containerLeft: {
      textAlign: "left",
    },
    containerMobile: {
      padding: "1rem 24px",
      color: "white",
    },
    itemMobile: {
      display: "flex",
      justifyContent: "space-between",
    },
    itemRight: {
      textAlign: "right",
      margin: "12px 0 12px 12px",
      "& a": {
        color: "white",
      },
    },
    itemLeft: {
      textAlign: "left",
      margin: "12px 12px 12px 0",
    },
    newsLetter: {
      textAlign: "center",
      height: "100px",
      margin: "1rem auto",
    },
    input: {
      fontSize: "12px",
      fontStyle: "italic",
      paddingLeft: "10px",
    },
  },
}));

const FooterWhite = () => {
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [logoFooterWhite, setLogoFooterWhite] = useState("");
  const [address, setAddress] = useState("");
  const [viAddress, setViAddress] = useState("");
  const [emailFooter, setEmailFooter] = useState("");
  const [tel, setTel] = useState("");
  const [socialList, setSocialList] = useState([])
  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/social"
        );
        setSocialList(res.data)
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

  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );
        setLogoFooterWhite(res.data.logoFooterWhite);
        setAddress(res.data.address);
        setViAddress(res.data.viAddress);
        setEmailFooter(res.data.email);
        setTel(res.data.tel);
      } catch (error) {
        // dispatch(getProjectListError());
        // toast.error('Kết nối server thất bại! Hảy load lại trang', {
        //     position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        // });
      }
    };
    getDetailApi();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    const addEmail = async () => {
      const newEmail = {
        email: email,
        genres: "newsletter",
      };
      try {
        const response = await axios({
          method: "POST",
          url: "http://themoderntouch.co:8000/v1/email",
          data: newEmail,
          // headers: { "Content-Type": "multipart/form-data" },
          // headers: { token: `Bearer ${token}` }
        }).then((res) => {
          toast.success("Send email successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setEmail("");
          // navigate('/career')
        });
      } catch (e) {
        toast.error("Send email failed!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };
    addEmail();

    // e.target.reset()
  };
  const useViewport = () => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  const viewPort = useViewport();
  const isMobile = viewPort.width <= 640;
  if (isMobile) {
    return (
      <div className={classes.containerMobile}>
        <div className={classes.itemMobile}>
          <div className={classes.itemLeft} style={{ width: "150px" }}>
            <img
              src={logoFooterWhite}
              alt="the modern touch"
              style={{
                maxWidth: "100%",
                height: "100px",
                marginTop: -20,
                marginLeft: -20,
              }}
            />
          </div>
          <div
            className={classes.itemRight}
            style={{ width: "45%", color: "white" }}
          >
            <h4>{lang ? "LIÊN HỆ" : "CONTACT"}</h4>
            <ul>
              <li>{lang ? viAddress : address}</li>
              <li>{emailFooter}</li>
              <li>{tel}</li>
            </ul>
          </div>
        </div>
        <div className={classes.itemMobile}>
          <div className={classes.itemLeft}>
            <h4>{lang ? "GIỚI THIỆU" : "ABOUT"}</h4>
            <ul>
              <li>
                <a href="./about">{lang ? "Nhân viên" : "People"}</a>
              </li>
              <li>
                <a href="./projects">{lang ? "Dự án" : "Projects"}</a>
              </li>
              <li>
                <a href="./news">{lang ? "Tin tức" : "News"}</a>
              </li>
              <li>
                <a href="./careers">{lang ? "Việc làm" : "Careers"}</a>
              </li>
            </ul>
          </div>
          <div className={classes.itemRight}>
            <h4>{lang ? "Mạng XÃ HỘI" : "SOCIAL"}</h4>
            <ul>
              {socialList.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item?.url}
                      target="_blank"
                    >
                      {item?.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className={classes.newsLetter}>
          <h2>{lang ? "ĐĂNG KÝ NHẬN TIN" : "SIGN UP NEWSLETTERS"}</h2>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={
                lang
                  ? "Điền email của bạn để đăng ký"
                  : "Enter your email to subscribe Us"
              }
              style={{
                borderRadius: "30px",
                border: "none",
                boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
                width: "90%",
                textAlign: "center",
                padding: "10px 10%",
                marginTop: "10px",
              }}
              required
            />
            <button
              onClick={(e) => sendEmail(e)}
              type="button"
              style={{
                border: "none",
                backgroundColor: "#fff",
                position: "absolute",
                top: "10px",
                right: "5%",
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
    );
  }
  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.container} spacing={3}>
        <Grid item xs={8}>
          <Grid container spacing={7}>
            <Grid item xs={2.8}>
              <img
                src={logoFooterWhite}
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "90px",
                  marginTop: "0rem",
                  marginLeft: "4rem",
                }}
              />
            </Grid>
            <Grid item xs={4} className={classes.containerLeft}>
              <h2>{lang ? "LIÊN HỆ" : "CONTACT"}</h2>
              <ul>
                <li>{lang ? viAddress : address}</li>
                <li>{emailFooter}</li>
                <li>{tel}</li>
              </ul>
            </Grid>
            <Grid item xs={3.7} className={classes.containerLeft}>
              <h2>{lang ? "GIỚI THIỆU" : "ABOUT"}</h2>
              <ul>
                <li
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => navigate("/about")}
                >
                  {lang ? "Nhân viên" : "People"}
                </li>
                <li
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => navigate("/projects")}
                >
                  {lang ? "Dự án" : "Projects"}
                </li>
                <li
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => navigate("/news")}
                >
                  {lang ? "Tin tức" : "News"}
                </li>
                <li
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={() => navigate("/careers")}
                >
                  {lang ? "Việc làm " : "Careers"}
                </li>
              </ul>
            </Grid>
            <Grid item xs={1.5} className={classes.containerLeft}>
              <h2>{lang ? "XÃ HỘI" : "SOCIAL"}</h2>
              <ul>
                {socialList.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item?.url}
                        target="_blank"
                        style={{ color: "white" }}
                      >
                        {item?.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} style={{ paddingRight: "3rem" }}>
          <h2>{lang ? "ĐĂNG KÝ NHẬN TIN" : "SIGN UP NEWSLETTERS"}</h2>
          <div style={{ position: "relative" }}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder={
                lang
                  ? "Điền email của bạn để đăng ký"
                  : "Enter your email to subscribe Us"
              }
              className={classes.input}
              required
            />
            <button
              type="button"
              onClick={(e) => sendEmail(e)}
              style={{
                border: "none",
                backgroundColor: "#fff",
                position: "absolute",
                top: "10px",
                right: "13%",
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
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterWhite;
