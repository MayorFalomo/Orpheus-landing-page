import React from "react";
import "../Styles/Mapped.css";

const Mapped = ({ Statue }) => {
  return (
    <div className="MapContainer">
      <div className="statueImg">
        <img src={Statue.image} alt="img" />
      </div>
    </div>
  );
};

export default Mapped;
