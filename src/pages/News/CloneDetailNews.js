import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Footer from "../../common/Footer";
import PhotoGallery from "../../components/project/PhotoGallery";
// import logo from '../../assets/images/logo/LogoBlack.png'
import { Helmet } from "react-helmet";

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookShareCount,
} from "react-share";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import Gallery from "react-photo-gallery";
import GalleryImages from "../../components/project/GalleryImages";
import { width } from "@mui/system";
import { useSelector } from "react-redux";
import Text1 from "./layoutNews/Text1";
import Text2 from "./layoutNews/Text2";
import Image1 from "./layoutNews/Image1";
import Image2 from "./layoutNews/Image2";
import Image3 from "./layoutNews/Image3";
import Youtube1 from "./layoutNews/Youtube1";
import Text3 from "./layoutNews/Text3";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "1200px",
    margin: "0 auto",
    // background: "#ccc",
    fontFamily: "Times New Roman",
    "& li": {
      listStyle: "unset",
    },
  },
  logo: {
    borderRadius: "50%",
    overflow: "hidden",
    width: 25,
    height: 25,
    border: "2px solid #ccc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "4px",
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    // marginTop: "-10px"
  },
  title: {
    color: "#fe5600",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  content: {
    marginTop: 25,
    minHeight: "calc(100vh - 900px)",
    "& >*": {
      marginBottom: "10px",
    },
  },
  recentPosts: {
    maxWidth: 940,
    width: "100%",
    margin: "1rem auto",
    marginBottom: "3rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
    cursor: "pointer",
    // padding: "0 10px"
  },
  resentItem: {
    "&:hover $titleItem": {
      color: "#fe5600",
    },
    margin: "0 auto",
  },
  titleItem: {
    fontSize: 16,
    width: 240,
    paddingTop: "10px",
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 940,
    margin: "1rem auto",
    fontSize: 24,
    color: "#323232",
    lineHeight: "29px",
    padding: "0 10px",
  },
  time: {
    marginBottom: "1rem",
    color: "#323232",
    "& >li": {
      fontStyle: "normal",
      display: "inline-block",
      height: 32,
    },
    position: "relative",
    paddingLeft: "30px",
  },
  cicle: {
    width: 2,
    height: 2,
    backgroundColor: "black",
    borderRadius: "50%",
    margin: "26px 8px",
    alignSelf: "center",
  },
  social: {
    height: "100px",
    borderTop: "0.5px solid #323232",
    // borderBottom: "0.5px solid #323232",
    marginTop: "5rem",
    marginBottom: "3rem",
    display: "flex",
    alignItems: "center",
    "& > *": {
      margin: "0 20px",
      cursor: "pointer",
    },
  },
  "@media (max-width: 1280px)": {
    container: {
      width: "740px",
      // padding: 60,
      margin: "0 auto",
      // background: "#ccc",
      fontFamily: "Times New Roman",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      width: "390px",
      padding: 8,
      margin: "0 auto",
      // background: "#ccc",
      fontFamily: "Times New Roman",
    },
  },
}));
const CloneDetailNews = () => {
  const classes = useStyles();

  const [post, setPost] = useState("");
  const [logoFooter, setLogoFooter] = useState("");
  const { id } = useParams();
  // const [recentPost, setRecentPost] = useState([])
  const lang = useSelector((state) => state.lang.lang);
  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );
        setLogoFooter(res.data.logoFooter);
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

  useEffect(() => {
    try {
      axios.get(`http://themoderntouch.co:8000/v1/post/${id}`).then((res) => {
        setPost(res.data);
        // setDay(res.data.createdAt)
        // console.log(res.data)
      });
    } catch (error) {}
  }, []);

  const shareUrl = `http://themoderntouch.co/news/${id}`;
  const navigate = useNavigate();
  // document.title = post.title
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        paddingTop: "3rem",
        minHeight: "calc(100vh - 100px)",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={shareUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.cover} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={post.cover} />
      </Helmet>
      <div className={classes.container}>
        <div>
          <ul className={classes.time}>
            <li>
              <div className={classes.logo}>
                <img style={{ width: "100%" }} src={logoFooter} alt="" />
              </div>
            </li>
            <li>
              <p>TheModernTouch</p>
            </li>
            <li>
              <div className={classes.cicle}></div>
            </li>
            <li>
              {post ? (
                <time>{format(new Date(post.createdAt), "dd-MM-yyyy")}</time>
              ) : (
                ""
              )}
            </li>
            <li>
              <div className={classes.cicle}></div>
            </li>
            <li>{lang ? "5 phút" : "5 min read"}</li>
          </ul>
        </div>
        <h2 className={classes.title}>{post.title}</h2>
        {post.content && (
          <div className={classes.content}>
            {post.content.map((item, index) => {
              switch (item.type) {
                case "text-1":
                  return (
                    // <div key={index}>{item.content}</div>
                    <Text1 key={index} text={lang ? item.vitext : item.text} />
                  );
                // break;
                case "text-2":
                  return <Text2 key={index} text={item.text} src={item.src} />;
                case "text-3":
                  return <Text3 key={index} text={item.text} src={item.src} />;
                case "image-1":
                  return <Image1 key={index} src={item.src} />;
                case "image-2":
                  return <Image2 key={index} src={item.images} />;
                case "image-3":
                  return <Image3 key={index} src={item.images} />;
                case "youtube-1":
                  return <Youtube1 key={index} link={item.link} />;
                default:
                  return "";
              }
            })}
          </div>
        )}

        {post.images && <GalleryImages photos={post?.images} margin={"2rem"} />}
        <div className={classes.social}>
          <span style={{ fontWeight: "bold" }}>
            {lang ? "Chia sẻ bài viết :" : "Share :"}
          </span>
          <FacebookShareButton
            url={shareUrl}
            quote={post?.title}
            hashtag={post?.hashtag}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            quote={post?.title}
            hashtag={post?.hashtag}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={shareUrl}
            quote={post?.title}
            hashtag={post?.hashtag}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
        </div>
      </div>
      {/* <div className={classes.titleSection}>
                <div>
                    <p>{lang ? "Bài viết khác" : "Recent Post"}</p>
                </div>
                <div>
                    <p style={{ cursor: "pointer", fontSize: "1.2rem" }} onClick={() => navigate('/news')}>See All</p>
                </div>
            </div>
            <div className={classes.recentPosts}>
                {recentPost.map((item, index) => {
                    return (
                        <div onClick={() => navigate(`/news/${item._id}`)} className={classes.resentItem} key={index}>
                            <div style={{
                                overflow: "hidden",
                                height: "140px",
                                width: "290px"
                            }}>
                                <img src={item.cover} />
                            </div>

                            <div className={classes.titleItem}>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    )
                })}


            </div> */}
      <Footer />
    </div>
  );
};

export default CloneDetailNews;
