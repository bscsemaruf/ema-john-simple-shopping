/** @format */

import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../provider/RoutesProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthProvider);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">SignUp</Link>
        {user && (
          <span>
            {user.email} <button onClick={handleLogout}>Logout</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
