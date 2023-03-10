import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../../common/Footer";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    // margin: "0 auto",
    fontStyle: "italic",
    fontFamily: "Times New Roman",
  },
  formSection: {
    width: "800px",
    margin: "0 auto",
    height: "calc(100vh - 400px)",
    "& *": {
      margin: "4px auto",
    },
    "& input": {
      width: "100%",
      borderRadius: "20px",
      height: "30px",
      border: "1px solid #999",
      paddingLeft: "10px",
      fontStyle: "italic",
    },
  },
  divFlex: {
    display: "flex",
    gap: "20px",
    "& *": {
      flex: 1,
    },
  },
  select: {
    display: "flex",
    width: "800px",
    margin: "0 auto",
  },
  "@media (max-width: 640px)": {
    container: {
      width: "100vw",
      // margin: "0 auto",
      fontStyle: "italic",
      fontFamily: "Times New Roman",
    },
    formSection: {
      width: "100%",
      margin: "0 auto",
      padding: "0 1rem",

      "& *": {
        margin: "4px auto",
      },
      "& input": {
        width: "100%",
        borderRadius: "20px",
        height: "30px",
        border: "1px solid #999",
        paddingLeft: "10px",
      },
    },
    divFlex: {
      display: "block",
      gap: "20px",
      "& *": {
        flex: 1,
      },
    },
    select: {
      display: "flex",
      width: "100%",
      margin: "0 auto",
    },
  },
}));
const Apply = () => {
  const classes = useStyles();
  const form = useRef();
  const lang = useSelector((state) => state.lang.lang);
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const url = `http://themoderntouch.co:8000/v1/career/${id}`;
    const getDetailApi = async () => {
      // dispatch(getProjectListStart());
      try {
        const res = await axios.get(url);
        setJob(res.data.job);
        // console.log(res);
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
        name: name,
        resumeLink: resumeLink,
        phone: phone,
        genres: "apply",
        job: job,
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
    // addEmail()
    emailjs
      .sendForm(
        "service_jh8uo28",
        "template_oegwlbh",
        form.current,
        "nAwpnWQcKARsp3l5d"
      )
      .then(
        (result) => {
          addEmail();
        },
        (error) => {
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
      );
    e.target.reset();
  };
  return (
    <div className={classes.container}>
      <div
        style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <h2 style={{ fontSize: "36px", color: "#fe5600" }}>{job}</h2>
      </div>
      <form className={classes.formSection} ref={form} onSubmit={sendEmail}>
        <div className={classes.divFlex}>
          <div>
            <label htmlFor="fname">{lang ? "Họ và tên" : "Full Name"} *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="user_name"
            />
          </div>
          <div>
            <label htmlFor="phone">
              {lang ? "Số điện thoại" : "Contact Number"} *
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
              name="user_phone"
              required
            />
          </div>
        </div>
        <div className={classes.divFlex}>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              name="email"
              required
            />
          </div>
        </div>

        {/* <div >
                    <label htmlFor="location">Resume (50Kb Max) *</label>
                    <input type="file" name="my_file" placeholder='(.doc, .docx, .pdf,... )' />
                </div> */}
        <div>
          <label htmlFor="portfolio">Resume and Portfolio Link</label>
          <input
            type="text"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            name="user_porfolio"
            placeholder="(Google drive, Dropbox,... )"
          />
        </div>
        <div className={classes.select} style={{ display: "block" }}>
          {/* <input type="radio" /> */}
          <label htmlFor="louie">
            By proceeding, I confirm that I have carefully read and agree to the
            Terms of Service and Privacy Policy.
          </label>
        </div>

        <div className={classes.select}>
          <button
            type="submit"
            style={{
              marginTop: "1rem",
              marginBottom: "4rem",
              color: "white",
              fontFamily: "Times New Roman",
              backgroundColor: "#fe5600",
              border: "none",
              borderRadius: "20px",
              padding: "6px 26px",
              fontStyle: "italic",
            }}
          >
            {lang ? "Ứng tuyển" : "Apply Now"}
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Apply;
