import React, { useState } from "react";
import { errors, errorTypes } from "./src/enums/loginEnums";

import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1 ",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: errorTypes.pass, message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: errorTypes.user, message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) => {
    if (name === errorMessages.name) {
      return <div className="error">{errorMessages.message}</div>;
    }
  };

  const renderErrorClass = (x) => {
    if (x === errorMessages.name){
      return "is-invalid";
    } 
    return "";
  }

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          
          <input type="text" name="uname" className={renderErrorClass(errorTypes.user)} required />
          {renderErrorMessage(errorTypes.user)}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" className={renderErrorClass(errorTypes.pass)} required />
          {renderErrorMessage(errorTypes.pass)}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  const successLogin = <div>User is successfully logged in</div>;

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? successLogin : renderForm}
      </div>
    </div>
  );
}

export default App;
