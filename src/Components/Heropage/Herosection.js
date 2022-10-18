import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "../Styles/Herosection.css";
import "../Styles/Mobile.css";

const Herosection = () => {
  const { clicked, setClicked } = useContext(ThemeContext);
  return (
    <div className="HeroContainer">
      <div className="heroCard">
        <div className="HeroSect">
          <h1>
            YET THE STORY OF <span>ORPHEUS </span>{" "}
          </h1>
          <p>
            In Sweet Music is Such Art: Killing Care And Grief Of Heart Fall
            Asleep, Or Hearing, Die.{" "}
          </p>
          <div className="btnFlex">
            <div>
              <img src="./worksBtn.svg" alt="img" />
            </div>
            <div>
              <img src="./freeBtn.svg" alt="img" />
            </div>
          </div>
        </div>
        <div className="fullContain">
          {clicked ? (
            <img className="HeroImg" src="./whiteStatue.svg" alt="img" />
          ) : (
            <img className="HeroImg" src="./FULL.svg" alt="img" />
          )}
        </div>
      </div>
      <div className="light">
        <img src="./leftLight.svg" alt="img" />{" "}
      </div>
      <div className="works">
        {" "}
        <h1>WORKS </h1>
      </div>
    </div>
  );
};

export default Herosection;
