import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../redux/langSlice";
import axios from "axios";

const TopBar = () => {
  const lang = useSelector((state) => state.lang.lang);
  const [langText, setLangText] = useState(true);
  const [emailFooter, setEmailFooter] = useState("");
  const [tel, setTel] = useState("");
  const [slogan, setSlogan] = useState("");

  useEffect(() => {
    const getDetailApi = async () => {
      try {
        const res = await axios.get(
          "http://themoderntouch.co:8000/v1/logo/63f6feb1f201dc12a14f2af9"
        );
        setSlogan(res.data.slogan);
        setEmailFooter(res.data.email);
        setTel(res.data.tel);
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
  const dispatch = useDispatch();
  const handleChangeLang = () => {
    setLangText(!langText);
    dispatch(changeLang(langText));
    // console.log(lang);
  };
  return (
    <Container>
      <Content>
        <div>{emailFooter}</div>
        <Slogan>
          <SloganImg src={slogan} alt="slogan" />
        </Slogan>
        <div>{tel}</div>
      </Content>
      <SubNav>
        {/* <Search>
          <SearchIcon sx={{ fontSize: 15 }} />
        </Search> */}
        <DropDown onClick={handleChangeLang}>
          <Language>{lang ? "VI" : "EN"}</Language>{" "}
          <ArrowDropDownIcon sx={{ fontSize: 15 }} />
        </DropDown>
      </SubNav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 1.5rem;
  padding-left: calc(100% / 22);
  padding-right: calc(100% / 12);
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    display: none;
  }
`;

const Content = styled.div`
  width: calc(11 * 100% / 12);
  padding-left: calc(100% / 12);
  text-align: center;
  font-size: 0.75rem;
  font-style: italic;
  line-height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Slogan = styled.div`
  margin-top: 10px;
`;

const SloganImg = styled.img`
  height: 20px;
  padding-left: 25px;
`;

const SubNav = styled.div`
  width: calc(100% / 12);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: right;
`;

const Search = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
`;

const DropDown = styled.div`
  display: flex;
  cursor: pointer;
`;

const Language = styled.div`
  font-size: 0.8rem;
`;

export default TopBar;
