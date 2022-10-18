import React from "react";
import { BsSun } from "react-icons/bs";
import "./Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="LogoCard">
          <img src="./Logo.svg" alt="img" />{" "}
        </div>
        <ul>
          <li>WORKS </li>
          <li>CONTRIBUTION </li>
          <li>COMMUNITY </li>
          <li>GET IN TOUCH </li>
          <li>{<BsSun className="bsSun" />} </li>
        </ul>
      </div>
      <div className="navLight">
        <img src="./EllipseLight.svg" alt="img" />
      </div>
    </nav>
  );
};

export default Navbar;
