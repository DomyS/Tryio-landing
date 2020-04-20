import React from "react";
import style from "./Footer.module.css";
import footerImage from "../../Images/Image3.png";
import Button from "../Button";

const Footer = ({ withText, top, height }) => {
  return (
    <div className={style.footerMain} style={{ height: height }}>
      {withText && (
        <div className={style.withText}>
          <div className={style.leftFooter}>
            <h1>Nysgjerrig?</h1>
            <h5>
              Lurer du på hvordan det kan passe i arbeidshverdagen din? Prøv da
              vel!
            </h5>
            <Button
              marginTop="50px"
              buttonText="Prøv gratis"
              width="100px"
              fontSize="19px"
              footer
            />
          </div>
          <div className={style.rightFooter}>
            <img src={footerImage} alt="footerImage" />
          </div>
        </div>
      )}
      <div className={style.footerBottom} style={{ top: top }}>
        <hr />
        <div className={style.footerBottomMenu}>
          <ul>
            <li>
              <a href="/">Hjem</a>
            </li>
            <li>
              <a href="/">Tjenesten</a>
            </li>
            <li>
              <a href="/">Kontakt oss</a>
            </li>
          </ul>
          <h5>©️ Tryio 2020</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
