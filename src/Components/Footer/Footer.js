import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <div className="footerCard">
      <h2>LET'S CONNECT </h2>
      <p>GET IN TOUCH FOR OPPORTUNITIES OR JUST TO SAY HI 👋</p>
      <p>Figma Design by Raef Orpheus and Elina Moghaddam </p>
      <p>FrontEnd done by Mayowa Falomo </p>
      <div className="socials" >
        <img src="./Socials.svg" alt="img" />
      </div>
    </div>
  );
};

export default Footer;
