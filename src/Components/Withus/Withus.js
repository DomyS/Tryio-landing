import React from "react";
import style from "./Withus.module.css";
import people from "../../Images/Image2.png";

function Withus() {
  return (
    <div className={style.WithusMain}>
      <h2>Effektiviser sensoriske tester med oss!</h2>
      <div className={style.WithusWrapper}>
        <div className={style.WithusLeft}>
          <img src={people} alt="Withus" className={style.WithusImage} />
        </div>
        <div className={style.WithusRight}>
          <h3>Vi sørger for at:</h3>
          <ul>
            <li>
              <span>Du får tilgang til riktig målgruppe</span>
            </li>
            <li>
              <span>Du sparer tid</span>
            </li>
            <li>
              <span>Selskapet ditt sparer penger</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Withus;
