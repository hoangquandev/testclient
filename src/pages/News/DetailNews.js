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
  //         subtitle: "Tối ngày 16/11/2022, tại trung tâm hội nghị GEM center, tập thể The Modern Touch đã cùng nhau tụ họp trong buổi lễ kỷ niệm 9 năm ngày thành lập công ty.",
  //         content1: "Sau quãng thời gian thăng trầm vì đại dịch Covid-19, The Modern Touch dưới sự dẫn dắt của người thuyền trưởng -  𝐓𝐒. 𝐊𝐓𝐒  Lê Quang Linh vượt qua bão tố và tiếp tục mang đến những giá trị tốt nhất cho các khách hàng. Kết quả này có được là nhờ vào những nỗ lực hết mình của cả tập thể.",
  //         content2: "Gần một thập kỷ kiến tạo chất lượng cuộc sống tại thị trường trong và ngoài nước, TMT vinh dự nhận được sự tin tưởng và hài lòng từ các khách hàng và đối tác. Đó là niềm tự hào và nguồn động lực to lớn để chúng tôi vươn tới những mục tiêu lớn hơn nữa trong tương lai.",
  //         content3: "Cũng trong ngày này, anh Lê Quang Linh đã có những phát biểu chân thành và ý nghĩa nhằm tri ân đến các khách hàng, đối tác và toàn thể đội ngũ nhân viên The Modern Touch. Không có sự đồng hành và chia sẻ của mọi người thì sẽ không có The Modern Touch của ngày hôm nay. "

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
