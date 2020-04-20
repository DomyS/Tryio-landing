import React from "react";
import style from "./RegistrationPage.module.css";
import Form from "../Form";
import Footer from "../Footer";

const RegistrationPage = () => {
  return (
    <div className={style.registerPage}>
      <Form />
      <Footer height="50vh" top="288px" />
    </div>
  );
};

export default RegistrationPage;
