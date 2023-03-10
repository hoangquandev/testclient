import React, { useEffect, useState } from "react";
import gif from "../assets/images/LOADINGFULL6s.gif";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  gif: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "80%",
  },
  "@media (max-width: 640px)": {
    image: {
      marginTop: "300px",
      maxWidth: "100%",
    },
  },
}));
const LoadingPage = () => {
  const classes = useStyles();
  // const [loading, setLoading] = useState('')
  // useEffect(() => {
  //   const getDetailApi = async () => {
  //     try {
  //       const res = await axios.get('http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9');

  //       setLoading(res.data.loading)

  //     } catch (error) {
  //       // dispatch(getProjectListError());

  //     }
  //   };
  //   getDetailApi()
  // }, [])
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 5, duration: 1 }}
      className={classes.gif}
    >
      <img src={gif} alt="" className={classes.image} />
    </motion.div>
  );
};

export default LoadingPage;
