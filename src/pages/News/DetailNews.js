import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../common/Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "1280px",
    margin: "2rem auto",
    fontFamily: "Times New Roman",
    fontSize: "16px",
    // lineHeight: "20px"
  },
  titleNews: {
    color: "#fe5600",
    fontSize: "30px",
    textAlign: "center",
    marginBottom: "1rem",
  },
  imageBaner: {
    width: "100%",
    margin: "0 auto",
  },
  content: {
    margin: "0.5rem auto",
    textAlign: "justify",
    fontSize: "20px",
  },
  "@media (max-width: 1290px)": {
    container: {
      width: "640px",
      margin: "2rem auto",
      fontFamily: "Times New Roman",
      fontSize: "16px",
      // lineHeight: "20px"
    },
    titleNews: {
      color: "#fe5600",
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "1rem",
    },
    imageBaner: {
      width: "100%",
      margin: "0 auto",
    },
    content: {
      margin: "0.5rem auto",
      textAlign: "justify",
      fontSize: "20px",
    },
  },
  "@media (max-width: 640px)": {
    container: {
      width: "390px",
      margin: "2rem auto",
      fontFamily: "Times New Roman",
      fontSize: "16px",
      // lineHeight: "20px"
    },
    titleNews: {
      color: "#fe5600",
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "1rem",
    },
    imageBaner: {
      width: "100%",
      margin: "0 auto",
    },
    content: {
      margin: "0.5rem auto",
      textAlign: "justify",
      fontSize: "20px",
    },
  },
}));
const DetailNews = () => {
  const classes = useStyles();
  // const [lang, setLang] = useState(true)
  // const handleLang = () => {
  //     setLang(!lang)
  // }
  // const content = {
  //     en: {
  //         subtitle: "On Wednesday, 16 November 2022, at GEM conference center, The Modern Touch team gathered together to celebrate the 9th Anniversary of the company's establishment.",
  //         content1: "After a hard time full of ups and downs due to Covid-19 pandemic, The Modern Touch under the tutelage of the captain - D. Arch Linh Quang Le, has overcome the storm and kept bringing the best value to the clients. This result was achieved by the efforts of the whole team.",
  //         content2: "Almost a decade of building quality of life for domestic and overseas markets, TMT is honored to receive the trust and satisfaction from clients and partners. That was a great pride and motivation for us to reach bigger goals in the future.",
  //         content3: "Also on this day, Mr. Linh Quang Le gave a sincere and meaningful speech to express his gratitude to clients, partners and the entire staff of The Modern Touch. Without your companionship and sharing, there would be no The Modern Touch like today."
  //     },
  //     vi: {
  //         subtitle: "T???i ng??y 16/11/2022, t???i trung t??m h???i ngh??? GEM center, t???p th??? The Modern Touch ???? c??ng nhau t??? h???p trong bu???i l??? k??? ni???m 9 n??m ng??y th??nh l???p c??ng ty.",
  //         content1: "Sau qu??ng th???i gian th??ng tr???m v?? ?????i d???ch Covid-19, The Modern Touch d?????i s??? d???n d???t c???a ng?????i thuy???n tr?????ng -  ????????. ????????????  L?? Quang Linh v?????t qua b??o t??? v?? ti???p t???c mang ?????n nh???ng gi?? tr??? t???t nh???t cho c??c kh??ch h??ng. K???t qu??? n??y c?? ???????c l?? nh??? v??o nh???ng n??? l???c h???t m??nh c???a c??? t???p th???.",
  //         content2: "G???n m???t th???p k??? ki???n t???o ch???t l?????ng cu???c s???ng t???i th??? tr?????ng trong v?? ngo??i n?????c, TMT vinh d??? nh???n ???????c s??? tin t?????ng v?? h??i l??ng t??? c??c kh??ch h??ng v?? ?????i t??c. ???? l?? ni???m t??? h??o v?? ngu???n ?????ng l???c to l???n ????? ch??ng t??i v????n t???i nh???ng m???c ti??u l???n h??n n???a trong t????ng lai.",
  //         content3: "C??ng trong ng??y n??y, anh L?? Quang Linh ???? c?? nh???ng ph??t bi???u ch??n th??nh v?? ?? ngh??a nh???m tri ??n ?????n c??c kh??ch h??ng, ?????i t??c v?? to??n th??? ?????i ng?? nh??n vi??n The Modern Touch. Kh??ng c?? s??? ?????ng h??nh v?? chia s??? c???a m???i ng?????i th?? s??? kh??ng c?? The Modern Touch c???a ng??y h??m nay. "

  //     }
  // }
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const lang = useSelector((state) => state.lang.lang);
  useEffect(() => {
    axios.get(`http://themoderntouch.co:8000/v1/post/${id}`).then((res) => {
      setPost(res.data);
    });
  }, []);
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.titleNews}>{post?.title}</h2>
        {/* <div className={classes.imageBaner}>
                <img style={{ width: "100%" }} src={post?.cover} alt='' />
            </div> */}
        {/* <div className={classes.content}>
                <h4>{lang ? content.en.subtitle : content.vi.subtitle}</h4>
            </div> */}
        {/* <div>
                <p className={classes.content}>

                    {lang ? content.en.content1 : content.vi.content1}
                </p>
                <p className={classes.content}>

                    {lang ? content.en.content2 : content.vi.content2}
                </p>
                <p className={classes.content}>

                    {lang ? content.en.content3 : content.vi.content3}
                </p>
            </div> */}
        {/* <div style={{ display: "flex", gap: "30px", marginTop: "2rem" }}>
                <img style={{ width: "100%" }} src={image1} alt='' />
                <img style={{ width: "100%" }} src={image2} alt='' />
                <img style={{ width: "100%" }} src={image3} alt='' />
            </div> */}
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: !lang ? post?.content : post?.vicontent,
          }}
          style={{ marginBottom: "3rem" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default DetailNews;
