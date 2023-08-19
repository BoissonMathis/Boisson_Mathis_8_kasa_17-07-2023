import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { about, accomodation, home } from "./Routes/Routes";
import App from "./pages/Home/App";
import AccomodationSheet from "./pages/AccommodationSheet/AccommodationSheet";
import AboutUs from "./pages/AboutUs/AboutUs";
import Error404 from "./pages/Error404/Error404";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<App />} path={home} />
        <Route element={<AccomodationSheet />} path={accomodation} />
        <Route element={<AboutUs />} path={about} />
        <Route element={<Error404 />} path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
