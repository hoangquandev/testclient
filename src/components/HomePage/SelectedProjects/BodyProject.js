import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

import Slider from "react-slick";

import img1 from "../../../assets/images/buildingiconfix/buildingicon-a1.png";
import img2 from "../../../assets/images/buildingiconfix/buildingicon-b1.png";
import img3 from "../../../assets/images/buildingiconfix/buildingicon-c1.png";
import img4 from "../../../assets/images/buildingiconfix/buildingicon-d1.png";
import img5 from "../../../assets/images/buildingiconfix/buildingicon-e1.png";
import img6 from "../../../assets/images/buildingiconfix/buildingicon-f1.png";
import img7 from "../../../assets/images/buildingiconfix/buildingicon-g1.png";
import img8 from "../../../assets/images/buildingiconfix/buildingicon-h1.png";
import img9 from "../../../assets/images/buildingiconfix/buildingicon-i1.png";
import imgActive1 from "../../../assets/images/buildingiconfix/buildingicon-a2.png";
import imgActive2 from "../../../assets/images/buildingiconfix/buildingicon-b2.png";
import imgActive3 from "../../../assets/images/buildingiconfix/buildingicon-c2.png";
import imgActive4 from "../../../assets/images/buildingiconfix/buildingicon-d2.png";
import imgActive5 from "../../../assets/images/buildingiconfix/buildingicon-e2.png";
import imgActive6 from "../../../assets/images/buildingiconfix/buildingicon-f2.png";
import imgActive7 from "../../../assets/images/buildingiconfix/buildingicon-g2.png";
import imgActive8 from "../../../assets/images/buildingiconfix/buildingicon-h2.png";
import imgActive9 from "../../../assets/images/buildingiconfix/buildingicon-i2.png";
import SelectedItem from "./SelectedItem";

const selectList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
const activeList = [
  imgActive1,
  imgActive2,
  imgActive3,
  imgActive4,
  imgActive5,
  imgActive6,
  imgActive7,
  imgActive8,
  imgActive9,
];

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
  },
  content: {
    width: "1280px",
    margin: "0 auto",
  },

  image: {
    borderRadius: "10px",
    maxWidth: "100%",
  },
  selectList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2rem",
  },
  itemSelect: {
    cursor: "pointer",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "160px",
  },
  sliderleft: {
    position: "absolute",
    width: "50px",
    height: "100px",
    backgroundColor: "#fff",
    top: "0%",
    left: "0%",
  },
  sliderright: {
    position: "absolute",
    width: "50px",
    height: "100px",
    backgroundColor: "#fff",
    top: "0%",
    right: "0%",
  },
}));
const BodyProject = ({ projectList }) => {
  const settings = {
    className: " center ",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
  };

  const classes = useStyles();
  const [selectIndex, setSelectedIndex] = useState(0);
  const [selectedImg1, setSelectedImg1] = useState(true);
  const [selectedImg2, setSelectedImg2] = useState(false);
  const [selectedImg3, setSelectedImg3] = useState(false);
  const [selectedImg4, setSelectedImg4] = useState(false);
  const [selectedImg5, setSelectedImg5] = useState(false);
  const [selectedImg6, setSelectedImg6] = useState(false);
  const [selectedImg7, setSelectedImg7] = useState(false);
  const [selectedImg8, setSelectedImg8] = useState(false);
  const [selectedImg9, setSelectedImg9] = useState(false);

  const handleSelected1 = () => {
    setSelectedImg1(true);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedImg9(false);
    setSelectedIndex(0);
  };
  const handleSelected2 = () => {
    setSelectedImg1(false);
    setSelectedImg2(true);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedImg9(false);
    setSelectedIndex(1);
  };
  const handleSelected3 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(true);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedImg9(false);
    setSelectedIndex(2);
  };
  const handleSelected4 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(true);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedImg9(false);
    setSelectedIndex(3);
  };
  const handleSelected5 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(true);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedImg9(false);
    setSelectedIndex(4);
  };
  const handleSelected6 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(true);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedImg9(false);
    setSelectedIndex(5);
  };
  const handleSelected7 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(true);
    setSelectedImg8(false);
    setSelectedImg9(false);
    setSelectedIndex(6);
  };
  const handleSelected8 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(true);
    setSelectedImg9(false);
    setSelectedIndex(7);
  };
  const handleSelected9 = () => {
    setSelectedImg1(false);
    setSelectedImg2(false);
    setSelectedImg3(false);
    setSelectedImg4(false);
    setSelectedImg5(false);
    setSelectedImg6(false);
    setSelectedImg7(false);
    setSelectedImg8(false);
    setSelectedImg9(true);
    setSelectedIndex(8);
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <Slider
            draggable={false}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
          >
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            {/* {projectList.map((item, index) => {
              return (
                <div>
                  <SelectedItem index={selectIndex} projectList={item} />
                </div>
              )
            })} */}

            {/* <div>
              <Lucas />
            </div> */}
            {/* <div> */}
            {/* <SelectedItem index={selectIndex} projectList={projectList} /> */}
            {/* </div> */}
            {/* <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <Lucas />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div>
            <div>
              <SelectedItem index={selectIndex} projectList={projectList} />
            </div> */}
          </Slider>
        </div>

        <div style={{ margin: "0 auto", width: "1280", position: "relative" }}>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            {...settings}
            style={{ width: "100%" }}
          >
            <div style={{ padding: "0 10px" }}>
              <div onClick={handleSelected1} className={classes.itemSelect}>
                {selectedImg1 ? (
                  <img style={{ height: "100px" }} src={activeList[0]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[0]} alt="" />
                )}
              </div>
            </div>

            <div style={{ padding: "0 10px" }}>
              <div
                onClick={handleSelected5}
                className={classes.itemSelect}
              // style={{ width: "121px" }}
              >
                {selectedImg5 ? (
                  <img style={{ height: "100px" }} src={activeList[4]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[4]} alt="" />
                )}
              </div>
            </div>
            <div style={{ padding: "0 10px" }}>
              <div onClick={handleSelected2} className={classes.itemSelect}>
                {selectedImg2 ? (
                  <img style={{ height: "100px" }} src={activeList[1]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[1]} alt="" />
                )}
              </div>
            </div>
            <div style={{ padding: "0 10px" }}>
              <div
                onClick={handleSelected6}
                className={classes.itemSelect}
              // style={{ width: "121px" }}
              >
                {selectedImg6 ? (
                  <img style={{ height: "100px" }} src={activeList[5]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[5]} alt="" />
                )}
              </div>
            </div>
            <div style={{ padding: "0 10px" }}>
              <div onClick={handleSelected3} className={classes.itemSelect}>
                {selectedImg3 ? (
                  <img style={{ height: "100px" }} src={activeList[2]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[2]} alt="" />
                )}
              </div>
            </div>
            <div style={{ padding: "0 10px" }}>
              <div
                onClick={handleSelected7}
                className={classes.itemSelect}
              // style={{ width: "121px" }}
              >
                {selectedImg7 ? (
                  <img style={{ height: "100px" }} src={activeList[6]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[6]} alt="" />
                )}
              </div>
            </div>
            <div style={{ padding: "0 10px" }}>
              <div onClick={handleSelected4} className={classes.itemSelect}>
                {selectedImg4 ? (
                  <img style={{ height: "100px" }} src={activeList[3]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[3]} alt="" />
                )}
              </div>
            </div>

            <div style={{ padding: "0 10px" }}>
              <div onClick={handleSelected8} className={classes.itemSelect}>
                {selectedImg8 ? (
                  <img style={{ height: "100px" }} src={activeList[7]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[7]} alt="" />
                )}
              </div>
            </div>

            {/* <div style={{ padding: "0 10px" }}>
              <div
                onClick={handleSelected9}
                className={classes.itemSelect}
              // style={{ width: "121px" }}
              >
                {selectedImg9 ? (
                  <img style={{ height: "100px" }} src={activeList[8]} alt="" />
                ) : (
                  <img style={{ height: "100px" }} src={selectList[8]} alt="" />
                )}
              </div>
            </div> */}
          </Slider>
          <div className={classes.sliderleft}></div>
          <div className={classes.sliderright}></div>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "2rem auto",
            }}
          >
            <ReadMoreButton />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BodyProject;
