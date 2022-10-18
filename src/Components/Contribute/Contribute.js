import React from "react";
import "../Styles/Contribute.css";
import "../Styles/Mobile.css";

const Contribute = () => {
  return (
    <div className="contribute-Container">
      <div className="maskCard">
        <h2>
          {" "}
          <span> CONTRIBUTION</span> |{" "}
        </h2>{" "}
        <button>VIEW MORE </button>
      </div>
      <div className="Card">
        <div className="flexItems">
          <div className="maskImg">
            <img src="./Mask.svg" alt="img" />
          </div>
          <div className="flexText">
            <h1>3D GREEK STATUE PACK </h1>
            <p>OVER 200 GREEK STYLE SCULPTURE </p>
            <div>
              <img src="./DownloadButton.svg" alt="img" />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
