import AboutUs from "../pages/AboutUs/AboutUs";
import Apply from "../pages/Careers/Apply";
import Careers from "../pages/Careers/Careers";
import Contact from "../pages/Contact/Contact";
import HomePage from "../pages/HomePage/HomePage";
import CloneDetailNews from "../pages/News/CloneDetailNews";
import DetailNews from "../pages/News/DetailNews";
import News from "../pages/News/News";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import DetailProject from "../pages/Projects/DetailProject";
import Projects from "../pages/Projects/Projects";
import Services from "../pages/Services/Services";

export const routes = [
  {
    path: "",
    page: HomePage,
  },
  {
    path: "about",
    page: AboutUs,
  },
  {
    path: "services",
    page: Services,
  },
  {
    path: "careers",
    page: Careers,
  },
  {
    path: "careers/:id",
    page: Apply
  },
  {
    path: "contact",
    page: Contact,
  },
  {
    path: "news",
    page: News,
  },
  {
    path: "news/:id",
    page: CloneDetailNews,
  },
  {
    path: "projects",
    page: Projects,
  },
  {
    path: "projects/:id",
    page: DetailProject,
  },


  // {
  //   path: "*",
  //   page: NotFoundPage,
  // },
];
