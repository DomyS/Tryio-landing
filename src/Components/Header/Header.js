import React from "react";
import style from "./Header.module.css";
import Button from "../Button";
import headerImage from "../../Images/MainImage.png";

const Header = () => {
  return (
    <div className={style.mainHeader}>
      <div className={style.headerLeft}>
        <h1>Enkel og effektiv rekruttering til forbrukertesting</h1>
        <p>
          Vi kobler innovative matbedrifter med riktig målgruppe for å utføre
          forbrukertester på en enkel og rimelig måte
        </p>
        <h3>Vil du rekrutere til forbrukertesting?</h3>
        <div className={style.buttonsHeader}>
          <Button
            className={style.buttonHeader}
            buttonText="Prøv gratis"
            url="/RegistrationPage"
            fontSize="20px"
            withBackground
          />
          <Button
            buttonText="Les mer"
            padding="13px 60px"
            border="2px solid #6C6CE5"
            color="#3C476C"
            fontSize="20px"
            withIcon
          />
        </div>
      </div>
      <div className={style.headerRight}>
        <img
          src={headerImage}
          className={style.headerImage}
          alt="HeaderImage"
        />
      </div>
    </div>
  );
};

export default Header;
