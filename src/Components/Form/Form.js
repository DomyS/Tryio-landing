import React, { Component } from "react";
import style from "./Form.module.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", pass: "", name: "", organization: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("email :" + this.state.email);
    console.log("pass : " + this.state.password);
    console.log("name : " + this.state.name);
    console.log("organization: " + this.state.organization);
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      organization: this.state.organization,
    };

    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:3000");

    fetch("https://europe-west2-tryio-6a1d3.cloudfunctions.net/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: headers,
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  };

  render() {
    return (
      <div className={style.formWrapper}>
        <div className={style.registerMain}>
          <h1>Registrer deg gratis</h1>
          {/* Form */}
          <form onSubmit={this.handleSubmit} className={style.form}>
            {/* email input */}
            <div className={style.inputContainer}>
              <label>Din e-postadresse</label>
              <div className={style.inputIcon}>
                <input
                  type="email"
                  name="email"
                  placeholder="tester@tryio.no"
                  onChange={this.handleChange}
                />
                <i className="fa fa-envelope"></i>
              </div>
            </div>
            {/* password input */}
            <div className={style.inputContainer}>
              <label>Lag passord</label>
              <div className={style.inputIcon}>
                <input
                  type="password"
                  name="password"
                  placeholder="Lag passordet ditt"
                  onChange={this.handleChange}
                />
                <i className="fa fa-briefcase"></i>
              </div>
            </div>
            {/* name input */}
            <div className={style.inputContainer}>
              <label>Navn</label>
              <div className={style.inputIcon}>
                <input
                  type="text"
                  name="name"
                  placeholder="Navnet ditt"
                  onChange={this.handleChange}
                />
                <i className="fa fa-user"></i>
              </div>
            </div>
            {/* organizations name input */}
            <div className={style.inputContainer}>
              <label>Selskapsnavn</label>
              <div className={style.inputIcon}>
                <input
                  type="text"
                  name="organization"
                  placeholder="Navnet til selskapet dittt"
                  onChange={this.handleChange}
                />
                <i className="fa fa-home"></i>
              </div>
            </div>

            <input type="submit" value="Registrer meg" />

            <p>
              Ved å registerer deg bekrefter du at du godtar Tryions{" "}
              <a href="/">vilkår</a> og
              <a href="/"> personværnserklaring</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
