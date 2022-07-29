import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Loginform.scss";
import "../enums/loginEnums";
import { errors, errorTypes } from "../enums/loginEnums";
import Inbox from "../inbox/Inbox";

export default function Loginform() {
  const [errorMassages, setErrorMassages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      email: "xxx@xxx.com",
      password: "pass1",
    },
    {
      username: "zzz@zzz.com",
      password: "pass2",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    let email = event.target[0].value;
    let pass = event.target[1].value;

    const userData = database.find((user) => user.email === email);
    console.log(userData);

    if (userData) {
      if (userData.password !== pass) {
        setErrorMassages({ type: errorTypes.pass, message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMassages({ type: errorTypes.email, message: errors.email });
    }
  };

  const renderErrorMassages = (type) => {
    if (type === errorMassages.type) {
      return <div className="error">{errorMassages.message}</div>;
    }
  };

  const renderErrorClass = (x) => {
    if (x === errorMassages.type) {
      return "form-control is-invalid";
    }
    return "form-control";
  };

  const loginForm = () => {
    return (
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-outline form-floating mb-4">
            <input
              type="email"
              placeholder="youremail@something.com"
              id="form2Example1"
              className={renderErrorClass(errorTypes.email)}
            />
            {renderErrorMassages(errorTypes.email)}
            <label className="form-label" for="form2Example1">
              Email address
            </label>
          </div>
          <div className="form-outline form-floating mb-4">
            <input
              type="password"
              placeholder="Xyz1234"
              id="form2Example2"
              className={renderErrorClass(errorTypes.pass)}
            />
            {renderErrorMassages(errorTypes.pass)}
            <label className="form-label" for="form2Example2">
              Password
            </label>
          </div>
          <div className="button-container">
            <input className="button" type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="login-form">{isSubmitted ? Inbox() : loginForm()}</div>
  );
}
