import React, { useContext, useState } from "react";
import { BsSun } from "react-icons/bs";
import { HiOutlineMoon } from "react-icons/hi";
import { ThemeContext } from "../App";
import "../Components/Styles/Navbar.css";
import "../Components/Styles/Mobile.css";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { setDarkMode, clicked, setClicked } = useContext(ThemeContext);
  const [click, setClick] = useState(false);
  const handleChange = () => {
    setClicked(!clicked);
    setDarkMode((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <nav>
      <div className="navContainer">
        <div className="LogoCard">
          {clicked ? (
            <img src="./blackStatue.svg" alt="img" />
          ) : (
            <img src="./Logo.svg" alt="img" />
          )}
        </div>
        <ul className={click ? "ShowMenu" : "HideMenu"}>
          <li>WORKS </li>
          <li>CONTRIBUTION </li>
          <li>COMMUNITY </li>
          <li>GET IN TOUCH </li>
          {clicked ? (
            <li onClick={handleChange} className={clicked ? "show" : "hide"}>
              {<HiOutlineMoon className="bsMoon" />}{" "}
            </li>
          ) : (
            <li
              onClick={handleChange}
              className={clicked ? "darkActive" : "dark"}
            >
              {<BsSun className="bsSun" />}{" "}
            </li>
          )}
        </ul>
        {click ? (
          <p
            onClick={() => setClick(!click)}
            className={click ? "showBar" : "HideBar"}
          >
            {" "}
            {<FaTimes className="menu" />}
          </p>
        ) : (
          <p
            onClick={() => setClick(!click)}
            className={click ? "HideBar" : "showBar"}
          >
            {<AiOutlineMenu className="menu" />}{" "}
          </p>
        )}
      </div>
      <div className="navLight">
        <img src="./EllipseLight.svg" alt="img" />
      </div>
    </nav>
  );
};

export default Navbar;
