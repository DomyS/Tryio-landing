import React from "react";
import Button from "../Button";
import RegistrationPage from "../RegistrationPage";
import style from "./NavBar.module.css";
import Logo from "../../Images/Logo3.png";

function NavBar() {
  return (
    <nav>
      <img src={Logo} className={style.Logo} alt="Logo" />
      <div className={style.menu}>
        <ul>
          <li>
            <a href="/" style={{ color: "#3C476C" }}>
              Hjem
            </a>
          </li>
          <li>
            <a href="/">Tjenesten</a>
          </li>
          <li>
            <a href="/">Kontakt oss</a>
          </li>
        </ul>
        <div className={style.buttons}>
          <Button
            buttonText="Sign In"
            padding="6px 30px"
            border="2px solid #4E4EA7"
            color="#3C476C"
          />
          <Button url="/RegistrationPage" buttonText="Bli tester" navBar />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
