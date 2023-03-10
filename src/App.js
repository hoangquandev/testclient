import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "aos/dist/aos.css";
import ScrollToTop from './helpers/ScrollToTop'

// import LoadingPage from "./pages/LoadingPage";
import "./App.css";
import { routes } from "./routes/index";
import { useEffect, useState } from "react";
import Public from "./pages/Public";
document.title = "The Modern Touch";

function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <div>

      <div style={{ position: "relative", overflowX: "hidden" }}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/*" element={<Public />}>
              {routes.map((route, key) => {
                const Page = route.page;
                return <Route key={key} path={route.path} element={<Page id={route.index} />} />;
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
