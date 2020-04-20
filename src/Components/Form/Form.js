import React from "react";
import style from "./Form.module.css";

function Form() {
  return (
    <div className={style.formWrapper}>
      <div className={style.registerMain}>
        <h1>Registrer deg gratis</h1>
        <div className={style.form}>
          <div className={style.inputContainer}>
            <label>Navn</label>
            <div className={style.inputIcon}>
              <input type="text" placeholder="Navnet ditt" />
              <i class="fa fa-user"></i>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label>Din e-postadresse</label>
            <div className={style.inputIcon}>
              <input type="email" placeholder="tester@tryio.no" />
              <i class="fa fa-envelope"></i>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label>Selskapsnavn</label>
            <div className={style.inputIcon}>
              <input type="text" placeholder="Navnet til selskapet dittt" />
              <i class="fa fa-home"></i>
            </div>
          </div>
          <div className={style.inputContainer}>
            <label>Lag passord</label>
            <div className={style.inputIcon}>
              <input type="text" placeholder="Lag passordet ditt" />
              <i class="fa fa-briefcase"></i>
            </div>
          </div>
          <button>Registrer meg</button>
          <p>
            Ved å registerer deg bekrefter du at du godtar Tryions{" "}
            <a href="/">vilkår</a> og
            <a href="/"> personværnserklaring</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
