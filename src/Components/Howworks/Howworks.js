import React from "react";
import style from "./Howworks.module.css";

function Howworks() {
  return (
    <div className={style.HowworksMain}>
      <div className={style.HowworksText}>
        <h1>Hvordan virker det?</h1>
        <h4>Vi erstatter manuell rekruttering med våre smarte algoritmer</h4>
        <div className={style.IconsList}>
          <div className={style.icons}>
            <ul>
              <li>
                <span>1</span>
              </li>
              <li className={style.clockIcon}>
                <span
                  className="fa fa-clock-o"
                  style={{ fontSize: "40px" }}
                ></span>
              </li>
              <li>
                <span>2</span>
              </li>
              <li>
                <span>3</span>
              </li>
            </ul>
          </div>
          <div className={style.list}>
            <ul>
              <li>
                <div className={style.listItem}>
                  <h2>Opprett ny testforespørsel</h2>
                  <p>
                    Lag en ny test og spesifiserer kriteriene for brukere som
                    skal delta i testing
                  </p>
                </div>
              </li>
              <li>
                <h2>Vent på testerne</h2>
                <p>
                  Vi tar oss av rekrutteringen. Våre smarte algoritmer skal
                  finne riktig målgruppe for deg i våre brukerdatabaser
                </p>
              </li>
              <li>
                <h2>Gjennomføre forbrukertesting</h2>
                <p>
                  Inviter testere til testlokaler eller sende produkter til dem
                </p>
              </li>
              <li>
                <h2>Få tilbakemeldinger</h2>
                <p>
                  For tilbakemeldinger kan du enten bruke våre spørreskjemaer
                  eller lag din egen
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howworks;
