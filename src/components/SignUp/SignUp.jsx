/** @format */

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../provider/RoutesProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthProvider);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password.length < 6) {
      setError("password should be 6 character at least");
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">SignUp</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="Enter Your Email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            placeholder="Re-Enter Your password"
          />
        </div>
        <p>
          <small>{error}</small>
        </p>
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p>
        <small>
          Already have an account?<Link to="/login"> Login </Link>
        </small>
      </p>
    </div>
  );
};

export default SignUp;
