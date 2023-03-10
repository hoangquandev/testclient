import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

import Footer from "../../common/Footer";
import PopUp from "../../components/project/PopUp";
import HeroDetail from "../../components/project/HeroDetail";
import GalleryImages from "../../components/project/GalleryImages";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    fontSize: "16px",
    "& th": {
      fontWeight: "normal",
      textAlign: "left",
    },
  },
  gallery: {
    marginBottom: "2rem",
  },
  // Grid: {
  //     display: "grid",
  //     gridTemplateColumns: "repeat(3, 1fr)",
  //     gridGap: "10px",
  //     margin: "auto",
  //     width: "90vw",
  // },
}));
const DetailProject = () => {
  const [openPopUp, closePopUp] = useState(false);
  const [indexImage, setIndexImg] = useState(null);
  const { id } = useParams();
  const lang = useSelector((state) => state.lang.lang);
  const handleClosePopUp = () => {
    closePopUp(false);
  };
  const handleOpenPopUp = () => {
    closePopUp(true);
  };
  const handleSelectImg = (index) => {
    setIndexImg(index);
  };
  const classes = useStyles();
  const [project, setProject] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        `http://themoderntouch.co:8000/v1/project/${id}`
      );
      setProject(res.data);
    };
    fetchProjects();
  }, [id]);

  return (
    <div className={classes.container}>
      <HeroDetail project={project} />
      {project?.images && (
        <GalleryImages margin={"2rem"} photos={project?.images} />
      )}
      {openPopUp && (
        <PopUp
          imageUrls={project?.images.slice(1)}
          indexImage={indexImage}
          handleClosePopUp={handleClosePopUp}
        />
      )}
      <Footer />
    </div>
  );
};

export default DetailProject;
