import React from "react";
import style from "./HomePage.module.css";
import Header from "../Header";
import Withus from "../Withus";
import Howworks from "../Howworks";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div className={style.HomePageMain}>
      <Header />
      <Withus />
      <Howworks />
      <Footer withText />
    </div>
  );
};

export default HomePage;
