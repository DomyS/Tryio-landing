import React, { Fragment } from "react";
import style from "./App.module.css";
import RegistrationPage from "./Components/RegistrationPage";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={style.App}>
      <Fragment>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/RegistrationPage" component={RegistrationPage} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
