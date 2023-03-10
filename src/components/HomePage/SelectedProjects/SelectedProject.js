import axios from "axios";
import React, { useEffect, useState } from "react";
import BodyProject from "./BodyProject";
import SelectedMobile from "./SelectedMobile";
import TitleProjects from "./TitleProjects";

const SelectedProject = () => {
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
  const [projectList, setprojectList] = useState([]);
  // const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        "http://themoderntouch.co:8000/v1/project/selected"
      );
      setprojectList(res.data);
      // console.log(res.data);
    };
    fetchProjects();
    // console.log(search);
  }, []);
  // console.log(projectList);
  return (
    <div>
      <TitleProjects />
      {isMobile ? (
        <SelectedMobile projectList={projectList} />
      ) : (
        <BodyProject projectList={projectList} />
      )}
    </div>
  );
};

export default SelectedProject;
