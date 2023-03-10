import { makeStyles } from "@mui/styles";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../../common/Footer";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "1280px",
    margin: "0 auto",
  },
  getInTouch: {
    width: "1280px",
    paddingTop: "3rem",
    margin: "0 auto",
    textAlign: "center",
    "& *": {
      width: "30%",
    },
  },
  contact: {
    display: "flex",
    gap: "80px",
    "& form": {
      flex: "0 0 50%",
      maxWidth: "50%",
      fontStyle: "italic",
      fontFamily: "Times New Roman",
      paddingBottom: "2rem",
      "& textarea": {
        fontStyle: "italic",
        fontFamily: "Times New Roman",
        border: "none",
        borderBottom: "1px solid",
        padding: "2px",
        "&:focus": {
          outline: "2px solid #fe5600",
          borderRadius: "5px",
          border: "none",
        },
      },
      "& label": {
        fontWeight: "bold",
      },
      "& input": {
        width: "100%",
        border: "none",
        borderBottom: "1px solid",
        fontStyle: "italic",
        fontFamily: "Times New Roman",
        height: "30px",
        paddingLeft: "2px",
        "&:focus": {
          outline: "2px solid #fe5600",
          borderRadius: "5px",
          border: "none",
        },
      },
    },
  },
  info: {
    flex: "0 0 50%",
    maxWidth: "50%",
    height: "100%",
    margin: "auto",
    "& li": {
      paddingLeft: "10px",
    },
  },
  "@media (max-width: 1024px)": {
    container: {
      width: "100%",
      margin: "0 auto",
      padding: "0 16px",
    },
    getInTouch: {
      width: "100%",
      // paddingTop: "3rem",
      margin: "0 auto",
      textAlign: "center",
      "& *": {
        width: "280px",
      },
    },
    contact: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      "& form": {
        flex: "0 0 100%",
        maxWidth: "100%",
        fontStyle: "italic",
        fontFamily: "Times New Roman",
        paddingBottom: "2rem",
        "& textarea": {
          fontStyle: "italic",
          fontFamily: "Times New Roman",
          border: "none",
          borderBottom: "1px solid",
          padding: "2px",
          "&:focus": {
            outline: "2px solid #fe5600",
            borderRadius: "5px",
            border: "none",
          },
        },
        "& label": {
          fontWeight: "bold",
        },
        "& input": {
          width: "100%",
          border: "none",
          borderBottom: "1px solid",
          fontStyle: "italic",
          fontFamily: "Times New Roman",
          height: "30px",
          paddingLeft: "2px",
          "&:focus": {
            outline: "2px solid #fe5600",
            borderRadius: "5px",
            border: "none",
          },
        },
      },
    },
    info: {
      flex: "0 0 100%",
      maxWidth: "100%",
      height: "100%",
      margin: "auto",
      "& li": {
        paddingLeft: "10px",
      },
    },
  },
  "@media (max-width: 640px)": {
    container: {
      width: "100%",
      margin: "0 auto",
      padding: "0 16px",
    },
    getInTouch: {
      width: "100%",
      // paddingTop: "3rem",
      margin: "0 auto",
      textAlign: "center",
      "& *": {
        width: "280px",
      },
    },
    contact: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      "& form": {
        flex: "0 0 100%",
        maxWidth: "100%",
        fontStyle: "italic",
        fontFamily: "Times New Roman",
        paddingBottom: "2rem",
        "& textarea": {
          fontStyle: "italic",
          fontFamily: "Times New Roman",
          border: "none",
          borderBottom: "1px solid",
          padding: "2px",
          "&:focus": {
            outline: "2px solid #fe5600",
            borderRadius: "5px",
            border: "none",
          },
        },
        "& label": {
          fontWeight: "bold",
        },
        "& input": {
          width: "100%",
          border: "none",
          borderBottom: "1px solid",
          fontStyle: "italic",
          fontFamily: "Times New Roman",
          height: "30px",
          paddingLeft: "2px",
          "&:focus": {
            outline: "2px solid #fe5600",
            borderRadius: "5px",
            border: "none",
          },
        },
      },
    },
    info: {
      flex: "0 0 100%",
      maxWidth: "100%",
      height: "100%",
      margin: "auto",
      "& li": {
        paddingLeft: "10px",
      },
    },
  },
}));
const Contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [detailContact, setDetailContact] = useState("");
  const [videtailContact, setviDetailContact] = useState("");
  const [map, setmap] = useState("");
  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );

        setDetailContact(res.data.detailContact);
        setviDetailContact(res.data.videtailContact);
        setmap(res.data.map);
      } catch (error) {
        // dispatch(getProjectListError());
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
        message: message,
        phone: phone,
        genres: "contact",
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

    emailjs
      .sendForm(
        "service_jh8uo28",
        "template_av5xqli",
        form.current,
        "nAwpnWQcKARsp3l5d"
      )
      .then(
        (result) => {
          addEmail();
        },
        (error) => {
          toast.error("Send email failed!", {
            position: "bottom-right",
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
  const classes = useStyles();
  const lang = useSelector((state) => state.lang.lang);
  return (
    <>
      <div className={classes.container}>
        <div className={classes.getInTouch}>
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 399.88 194.01"
          >
            <path d="M0,137.57l.6-.4A21.26,21.26,0,0,0,6,139a29.51,29.51,0,0,0,5.79.6,27,27,0,0,0,13.36-3.69A63.44,63.44,0,0,0,37.8,126.4a98.36,98.36,0,0,0,11.57-13.26q5.49-7.47,10.17-14.85T67.92,84q3.69-6.89,6.29-11.67c0-1.06-.4-1.19-1.2-.4-1.2,1.07-3.16,2.66-5.89,4.79A70.44,70.44,0,0,1,57.35,83a80.64,80.64,0,0,1-12.77,5.48,46,46,0,0,1-14.86,2.39q-14.56,0-22-6.08T.2,68.19c0-2.8.8-6.91,2.39-12.37a77.63,77.63,0,0,1,8-17.54A90.21,90.21,0,0,1,25.23,20,70.56,70.56,0,0,1,47.68,5.58,71.41,71.41,0,0,1,63.53,1.2,96.79,96.79,0,0,1,78,0a73.66,73.66,0,0,1,7.38.4,59.41,59.41,0,0,1,7.77,1.3,31.39,31.39,0,0,1,7,2.49,14.9,14.9,0,0,1,5,3.78,85.33,85.33,0,0,1-2.49,8.28q-1.69,4.89-3.29,8.47l-1.4.4-.2-.6a14.67,14.67,0,0,0,.6-2.39,16.12,16.12,0,0,0,.2-2.59,12.2,12.2,0,0,0-2.09-6.78,19.94,19.94,0,0,0-5.69-5.58,28.36,28.36,0,0,0-8.38-3.69,38.92,38.92,0,0,0-10.17-1.3A42.58,42.58,0,0,0,53.26,6.48a59.49,59.49,0,0,0-16,11.46,87.51,87.51,0,0,0-9.37,10.87,129.39,129.39,0,0,0-9.28,14.35,102.86,102.86,0,0,0-7.08,15.46A42.7,42.7,0,0,0,8.78,73q0,8,5.38,12.16t15.56,4.19a45,45,0,0,0,17.56-3.69,74.33,74.33,0,0,0,16-9.17A70.83,70.83,0,0,0,76,64.3a45.8,45.8,0,0,0,7.58-12.66,7.26,7.26,0,0,0,.7-3c-.07-.67-.83-1-2.3-1q-3.39.2-8,.6c-3.06.27-6.39.53-10,.8l-.6-.2.6-2.2c2.66,0,5.62-.06,8.88-.2s6.51-.3,9.77-.49,6.39-.53,9.38-1,5.68-1,8.08-1.5q.8.6,0,1.8a10.53,10.53,0,0,0-4.39,1.89A13.77,13.77,0,0,0,93.15,51q-3.78,7.38-8.67,16.85t-10.18,19Q69,96.5,63.63,105a109.34,109.34,0,0,1-10.17,13.86q-2,2.39-5.69,6.18a56.1,56.1,0,0,1-8.87,7.27,58.79,58.79,0,0,1-12,6.08A42.15,42.15,0,0,1,11.77,141a40.42,40.42,0,0,1-5.59-.4,28.9,28.9,0,0,1-6-1.6Z" />
            <path d="M151.6,64.6a94.9,94.9,0,0,1-8.08,8.67,74.86,74.86,0,0,1-10.17,8.17,58.49,58.49,0,0,1-11.37,6,32.16,32.16,0,0,1-11.67,2.29q-9.37,0-9.38-8.38a29.75,29.75,0,0,1,2.9-12.06,50.31,50.31,0,0,1,7.48-12,48.13,48.13,0,0,1,10.07-9.17q5.49-3.69,10.47-3.69c1.86,0,3.16.33,3.89,1a3.34,3.34,0,0,1,1.1,2.59,11.06,11.06,0,0,1-1.5,5.18,18.09,18.09,0,0,1-4.48,5.29,25.82,25.82,0,0,1-7.58,4.18,31.76,31.76,0,0,1-11,1.7,31.36,31.36,0,0,0-2.2,5.68,26.56,26.56,0,0,0-1.2,7.87q0,8.19,7.38,8.18a23.13,23.13,0,0,0,9.48-2.19,54.7,54.7,0,0,0,9.47-5.49,67.62,67.62,0,0,0,8.48-7.17A74.49,74.49,0,0,0,150.2,64a.81.81,0,0,1,1.4.6ZM130.66,49.05a2.3,2.3,0,0,0-2.6-2.6A7.05,7.05,0,0,0,124,48a22,22,0,0,0-4.08,3.89A49,49,0,0,0,116.1,57a45,45,0,0,0-3,5.38,4.09,4.09,0,0,0,1.4.3,15.74,15.74,0,0,0,1.6.1,14.5,14.5,0,0,0,10.17-4.08A12.82,12.82,0,0,0,130.66,49.05Z" />
            <path d="M188.7,15.55a15.71,15.71,0,0,0-3.59,1.5,7.89,7.89,0,0,0-3,2.69q-4.59,6.38-8.88,13.36T165,47.05H189.7c.4.27.6.53.6.8a.64.64,0,0,1-.4.6c-1.07,0-2.66,0-4.79.1s-4.46.17-7,.3l-7.78.4q-4,.2-7,.39a188.73,188.73,0,0,0-8.58,17,31.76,31.76,0,0,0-3,12.16q0,7.19,6.58,7.18a19.14,19.14,0,0,0,7.28-1.7,62.77,62.77,0,0,0,8.68-4.48c.4-.4.8-.37,1.2.1s.26.83-.4,1.1a59.11,59.11,0,0,1-12.57,6.38,36.14,36.14,0,0,1-11.77,2,8.72,8.72,0,0,1-5.58-1.89q-2.4-1.91-2.4-6.48,0-4,3.59-11.77A193,193,0,0,1,157,50l-5.89.5c-2.33.2-3.69.3-4.09.3-.66,0-1-.26-1-.8a9.9,9.9,0,0,1,2.6-2.79l10.17-.2q1.8-3,4-6.68L167.16,33q2.19-3.69,4.49-7.18t4.09-6.48c1.46-.66,3.49-1.53,6.08-2.59s4.89-1.93,6.88-2.59a.64.64,0,0,1,.6.49Q189.5,15.16,188.7,15.55Z" />
            <path d="M222.31,88a4.11,4.11,0,0,0,1.79-.7A6.39,6.39,0,0,0,225.54,86q1.38-1.74,3.75-5.08t5.08-7.49q2.7-4.15,5.59-8.76t5.42-8.94c1.69-2.88,3.18-5.55,4.44-8a37.16,37.16,0,0,0,2.6-6,4.12,4.12,0,0,0,.23-1.27c0-.84-1-1.27-3.11-1.27-.93,0-2,0-3.12.12a20.93,20.93,0,0,0-3.23.46l-.34-.12a2.89,2.89,0,0,1,.69-1.38c3.23-.15,6.4-.33,9.52-.52a76.05,76.05,0,0,0,8-.86,1,1,0,0,1,.58.92c0,.15-.23.31-.69.46a2.56,2.56,0,0,0-1.5,1,19.69,19.69,0,0,0-1.16,1.84q-2.42,4.5-5.48,10c-2,3.69-4.21,7.52-6.51,11.48s-4.68,7.9-7.1,11.82-4.75,7.57-7,11a7.07,7.07,0,0,1-2.07,2,7.34,7.34,0,0,1-2.2.92,19,19,0,0,1-2.76.29,18.76,18.76,0,0,1-2.66-.06C222.39,88.48,222.31,88.28,222.31,88Z" />
            <path d="M288.3,73.45a63.37,63.37,0,0,1-4.79,5.82,43.66,43.66,0,0,1-5.77,5.25,35.39,35.39,0,0,1-6.23,3.8,14.37,14.37,0,0,1-6.17,1.5,7.65,7.65,0,0,1-2.54-.4c-.77-.27-1.15-.94-1.15-2a10.18,10.18,0,0,1,1.15-4.09c.77-1.66,1.68-3.4,2.71-5.25s2.12-3.73,3.23-5.65a48.74,48.74,0,0,0,2.71-5.3,1.22,1.22,0,0,0,.06-1q-.17-.41-.75-.06-1.26.81-3,2.19t-3.51,2.94c-1.2,1-2.35,2.1-3.47,3.17a38.6,38.6,0,0,0-2.71,2.88c-1.23,1.93-2.29,3.69-3.17,5.31s-2,3.42-3.29,5.42q-.47.69-.69.69c-.39,0-.71-.42-1-1.27a7.3,7.3,0,0,1-.4-1.61A5.21,5.21,0,0,1,251,83q1.44-1.78,3.17-4Q256,75.29,258,71.2t3.34-7.32a1.13,1.13,0,0,1,1-.58,2,2,0,0,1,1.85,1.85,13,13,0,0,1-1.68,3.17,55,55,0,0,0-3.28,6.28c1.46-1.3,3-2.69,4.78-4.15s3.39-2.81,5-4,2.95-2.24,4.15-3a5.84,5.84,0,0,1,2.48-1.21,1.11,1.11,0,0,1,.86.52,1.62,1.62,0,0,1,.41,1A3.1,3.1,0,0,1,276.3,65c-.85,1.23-1.88,2.81-3.11,4.73s-2.41,3.9-3.52,5.94a59.11,59.11,0,0,0-2.83,5.82,12.25,12.25,0,0,0-1.15,4.38,2.51,2.51,0,0,0,.57,1.9,2.71,2.71,0,0,0,1.85.52,9.71,9.71,0,0,0,4.61-1.5,42.8,42.8,0,0,0,5.48-3.74,46,46,0,0,0,5.37-5,38.9,38.9,0,0,0,4.15-5.3.53.53,0,0,1,.69-.18C288.72,72.7,288.68,73,288.3,73.45Z" />
            <path d="M117.62,102.1a162.23,162.23,0,0,0-19.05,1A43.69,43.69,0,0,0,84,107.28a35.23,35.23,0,0,0-11.27,9.27,64.41,64.41,0,0,0-9.17,16.25c-.27.53-.57.7-.9.5a2.72,2.72,0,0,1-.9-1.5A95.84,95.84,0,0,1,66,121.34,59.2,59.2,0,0,1,71.44,112a35.81,35.81,0,0,1,6.89-7.28,18.41,18.41,0,0,1,8.37-3.79,53.65,53.65,0,0,1,11.18-.9q6.18.1,12.36.1c3.86,0,7.71,0,11.57.1s7.71.1,11.57.1H142q16-.19,25.53-5.38a23.69,23.69,0,0,0,6-4.78,10,10,0,0,0,3-7,3.49,3.49,0,0,0-.2-1.4.82.82,0,0,1-.2-.6c0-.53.2-.79.6-.79q.2,0,.6.39A20.5,20.5,0,0,1,180.86,86a4,4,0,0,1,.6,2.39,6.43,6.43,0,0,1-.8,2.79,18.79,18.79,0,0,1-10.08,8,55.66,55.66,0,0,1-16.25,2.79c-2.27.13-4.66.17-7.18.1s-4.79,0-6.79.1a4.77,4.77,0,0,0-4.19,2Q125,121,115.53,137.19t-17.26,30.3a57.65,57.65,0,0,0-2.89,6.28,19.62,19.62,0,0,0-1.29,5.28,12.25,12.25,0,0,0,.39,3.1,4.93,4.93,0,0,0,1.8,2.59,11.11,11.11,0,0,0,4.09,1.79,28.82,28.82,0,0,0,7.08.7h2.39a12.74,12.74,0,0,0,2.4-.2c.4.53.2,1.06-.6,1.6q-3.39.39-7.58.49c-2.79.07-5.39.1-7.78.1-2,0-3.89,0-5.69-.1a17.43,17.43,0,0,1-4.78-.79,8,8,0,0,1-3.39-2.1,5.62,5.62,0,0,1-1.3-4,9.61,9.61,0,0,1,.8-3.58,25.32,25.32,0,0,1,2.19-4.19Q89.5,165.7,95,156.53t10.77-18.25q5.3-9.06,10.28-17.74t9.17-16.65c.67-1.19.33-1.79-1-1.79Z" />
            <path d="M192.23,154.13a40.6,40.6,0,0,1-8.28,8.28,17.91,17.91,0,0,1-11.07,3.69,14.44,14.44,0,0,1-6.68-1.7,12.91,12.91,0,0,1-5.29-5.08q-1.4,3.19-3.59,7.27a69.13,69.13,0,0,1-5.19,8.18,50.56,50.56,0,0,1-6.68,7.47,36.69,36.69,0,0,1-7.88,5.59,15.49,15.49,0,0,1-6,1.59q-7.19,0-7.18-6.38a22.76,22.76,0,0,1,1.29-7.37,45.7,45.7,0,0,1,3.29-7.38,69.71,69.71,0,0,1,4.29-6.78,42.88,42.88,0,0,1,4.29-5.18,41.63,41.63,0,0,1,9.58-7.78,27.75,27.75,0,0,1,11.57-3.79,32.66,32.66,0,0,1,1.19-3.69,3.66,3.66,0,0,1,2.79-2.49l2-.4a7.24,7.24,0,0,0,1.79-.59,1.12,1.12,0,0,1,1.2-.1c.4.2.47.56.2,1.09a16.63,16.63,0,0,0-2.09,5.58,36.34,36.34,0,0,0-.7,7.38,18.06,18.06,0,0,0,2.09,9.17c1.4,2.4,3.82,3.59,7.29,3.59a14.52,14.52,0,0,0,9.37-3.39,36.3,36.3,0,0,0,7-7.37c.27-.67.7-.87,1.3-.6S192.76,153.6,192.23,154.13Zm-32.92,1.4a32.24,32.24,0,0,1-.59-4.19c-.14-1.59-.2-3.12-.2-4.58,0-.67-.27-1-.8-1a8.67,8.67,0,0,0-4.59,1.5,25.12,25.12,0,0,0-4.79,4,63.38,63.38,0,0,0-4.78,5.68,69.69,69.69,0,0,0-4.39,6.58,74.54,74.54,0,0,0-4.69,9.47,22.77,22.77,0,0,0-1.9,9.67,6.73,6.73,0,0,0,.5,2.6,2.21,2.21,0,0,0,2.3,1.19q3.39,0,7.38-3.79a59.57,59.57,0,0,0,7.58-8.87,71.62,71.62,0,0,0,6.08-10.27A30.16,30.16,0,0,0,159.31,155.53Z" />
            <path d="M236.91,164.1q-3.39,4.78-8,10.07a101.76,101.76,0,0,1-9.57,9.67,58.85,58.85,0,0,1-10.18,7.28,20.26,20.26,0,0,1-9.77,2.89,7.39,7.39,0,0,1-5.29-1.8c-1.26-1.19-1.89-3.06-1.89-5.58a19,19,0,0,1,.5-4.09,28.15,28.15,0,0,1,1.69-5.08c-.8.93-1.69,2-2.69,3.29a29.25,29.25,0,0,1-3.39,3.59,17.8,17.8,0,0,1-4.19,2.79,11.68,11.68,0,0,1-5.09,1.1,5,5,0,0,1-3.59-1.3,5.32,5.32,0,0,1-1.39-4.09,14.88,14.88,0,0,1,.69-4,49,49,0,0,1,2.6-6.48q1.89-4.09,5.18-10.17T191,147.16c.66-1.33,1.26-2,1.8-2a4.1,4.1,0,0,1,2.89,1.7c1,1.13,1.49,1.89,1.49,2.29a6,6,0,0,1-1.19,2.39q-3.2,4.78-6,9.57t-4.88,9c-1.4,2.79-2.53,5.29-3.39,7.48a15.08,15.08,0,0,0-1.3,5.08c0,2,.73,3,2.19,3s3.16-1,5.49-3.09,5.08-5.54,8.28-10.46q1.79-3.2,3.69-6.68c1.26-2.33,2.49-4.55,3.69-6.68s2.32-4.09,3.39-5.88,1.86-3.16,2.39-4.09,1.2-1.4,1.6-1.4,1.13.57,1.79,1.7a7.87,7.87,0,0,1,1,4.09,6,6,0,0,1-.8,3q-2.38,3.59-5.08,7.08a77.25,77.25,0,0,0-5,7.27,49.08,49.08,0,0,0-3.89,8,25.42,25.42,0,0,0-1.6,9.17q0,4.38,4.19,4.38a14.68,14.68,0,0,0,6.69-2.09A52.84,52.84,0,0,0,217,184a91.92,91.92,0,0,0,9.48-9.17,112,112,0,0,0,9.27-11.76Q236.91,162.7,236.91,164.1Z" />
            <path d="M279.2,161.31a99.9,99.9,0,0,1-6.78,7.68q-3.8,3.88-7.78,7.37a79.57,79.57,0,0,1-8.18,6.28,47.69,47.69,0,0,1-8,4.39,31.45,31.45,0,0,1-5.49,1.69,24.09,24.09,0,0,1-4.68.5q-11,0-11-9.17a20.28,20.28,0,0,1,1.6-7.57,52.65,52.65,0,0,1,10.67-16.65,44.51,44.51,0,0,1,14.86-10.67,11,11,0,0,1,4-1q7.38,0,7.38,5.79a6.74,6.74,0,0,1-1.39,4.58,48.31,48.31,0,0,1-4,3.39l-.6-.2a9.52,9.52,0,0,0,.6-3.39,5.86,5.86,0,0,0-1.5-3.79,5.79,5.79,0,0,0-4.69-1.79,12.38,12.38,0,0,0-7.28,2.49,24.76,24.76,0,0,0-6.18,6.58,35.5,35.5,0,0,0-4.29,9.37,37.25,37.25,0,0,0-1.6,10.87q0,4.19,2.3,6.28a8.13,8.13,0,0,0,5.68,2.09q5.58,0,15.06-6.48t20.25-19.64c.66-.66,1.16-.82,1.5-.49S279.86,160.65,279.2,161.31Z" />
            <path d="M399.88,56.64a28.16,28.16,0,0,1-.3,4.79,9.46,9.46,0,0,1-.6,2.19q-.3.6-.6.3a1,1,0,0,1-.3-.7,14.63,14.63,0,0,0-.69-3.79,12.08,12.08,0,0,0-2.8-4.68,17.52,17.52,0,0,0-5.88-4,24.14,24.14,0,0,0-9.78-1.7,40.37,40.37,0,0,0-10.67,1.5,41.51,41.51,0,0,0-11.87,5.78A86.26,86.26,0,0,0,342.73,68.2a175.51,175.51,0,0,0-15.86,19.64q-8.58,12.07-18.65,29.31t-22,40.77c.93-.8,2.39-2,4.39-3.59s4.18-3.19,6.58-4.78a80,80,0,0,1,7-4.19,12.86,12.86,0,0,1,5.79-1.79c1.19,0,1.79.46,1.79,1.39s-.6,2-1.79,3.59-2.47,3.79-4.19,6.58-3.43,5.78-5.09,9a98.36,98.36,0,0,0-4.29,9.37,21.49,21.49,0,0,0-1.79,7.38,6.49,6.49,0,0,0,1.59,4.78,5.91,5.91,0,0,0,4.39,1.6q4.59,0,13-6t19.15-20.34a1.16,1.16,0,0,1,.79-.4c.27,0,.4.27.4.8A97.79,97.79,0,0,1,325,172.08a119,119,0,0,1-10.38,9.77A57.49,57.49,0,0,1,304,188.92a21.53,21.53,0,0,1-9.67,2.7,7.51,7.51,0,0,1-5.39-1.9,6.92,6.92,0,0,1-2-5.28,21.54,21.54,0,0,1,2.19-8.18q2.19-5,4.89-10.06t4.88-9.38q2.21-4.27,2.2-6.08,0-1-.6-1-1.8,0-6.48,3.39T282.39,165.9c-1.87,3.32-3.79,6.78-5.79,10.36s-3.72,6.78-5.18,9.57q-1.6,3.19-3,3.19a9.16,9.16,0,0,1-2.6-.49,1.92,1.92,0,0,1-1.59-1.9,5.07,5.07,0,0,1,.59-2.19q8.39-15.15,16.36-28.61t16.16-26.42q9.57-15,19.85-30.5a298.74,298.74,0,0,1,21-28.31,127,127,0,0,1,21.84-20.84q11.07-8.07,22.25-8.07a25.13,25.13,0,0,1,5.78.7,19.92,19.92,0,0,1,5.68,2.29,12.34,12.34,0,0,1,4.39,4.48A14.66,14.66,0,0,1,399.88,56.64Z" />
          </svg>
        </div>
        <div className={classes.contact}>
          <form
            action=""
            className={classes.formSubmit}
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <label htmlFor="subject">
                {lang ? "G???i tin nh???n" : "Send a Messages"}
              </label>{" "}
              <br />
              <textarea
                name="subject"
                placeholder=""
                style={{ height: 70, width: "100%", resize: "none" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{ flex: "0 0 50%", width: "50%", marginRight: "2px" }}
              >
                <label htmlFor="name">{lang ? "H??? v?? t??n" : "Full Name"}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="user_name"
                  placeholder={lang ? "" : "Your name here"}
                />
              </div>
              <div style={{ flex: "0 0 50%", width: "50%" }}>
                <label htmlFor="phone">
                  {lang ? "S??? ??i???n tho???i" : "Phone Number"}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="user_phone"
                  placeholder={lang ? "" : "Your phone number here"}
                />
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{ flex: "0 0 80%", width: "80%", marginRight: "2px" }}
              >
                <label htmlFor="address">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="user_email"
                  placeholder={lang ? "" : "Your email here"}
                />
              </div>
              <div
                style={{
                  flex: "0 0 20%",
                  width: "20%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  type="submit"
                  style={{
                    width: "100px",
                    borderRadius: "20px",
                    border: "1px solid #ccc",
                    padding: "5px 20px",
                    background: "transparent",
                    fontFamily: "Times New Roman",
                    fontSize: "16px",
                  }}
                >
                  {lang ? "G???i" : "Send"}
                </button>
              </div>
            </div>
          </form>
          <div className={classes.info}>
            <div
              dangerouslySetInnerHTML={{
                __html: lang ? videtailContact : detailContact,
              }}
            />
          </div>
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.6469301169045!2d106.6913026150327!3d10.78293109231713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fa6625f7ca1%3A0xb7c6419029701be9!2sTHE%20MODERN%20TOUCH!5e0!3m2!1svi!2s!4v1671252426200!5m2!1svi!2s" width="100%" height={450} style={{ border: 0, filter: "grayScale(100%)", marginTop: "2rem", marginBottom: "4rem" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
        <div style={{ marginBottom: "2rem" }}>
          <img src={map} alt="map" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
