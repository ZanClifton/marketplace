import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar ">
      <h1>A-Z Market Place</h1>
      <Link to="/" className="navLink">
        Home
      </Link>{" "}
      <Link to="/basket" className="navLink">
        Basket
      </Link>{" "}
      <Link to="/profile" className="navLink">
        Profile
      </Link>{" "}
      <Link to="/previous" className="navLink">
        Previous Orders
      </Link>
    </nav>
  );
};
