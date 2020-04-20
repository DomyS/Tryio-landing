import React from "react";
import style from "./HomePage.module.css";
import Header from "../Header";
import WithusPage from "../WithusPage";
import HowworksPage from "../HowworksPage";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div className={style.HomePageMain}>
      <Header />
      <WithusPage />
      <HowworksPage />
      <Footer withText />
    </div>
  );
};

export default HomePage;
