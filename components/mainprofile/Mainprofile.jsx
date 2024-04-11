import React from "react";
import "./Mainprofile.css";
import { ReactTyped } from "react-typed";
import mainpic from "../../images/mainpic.png";
export default function Mainprofile() {
  return (
    <div className="right_area" id="home">
      <div className="area1">
        <div className="text1">
          <h5>Hello, I am</h5>
        </div>
        <div className="text2">
          <h1>Sanuth Bibin.B</h1>
        </div>
        <div className="text3">
          I Am Passionate&nbsp;
          <ReactTyped
            strings={["Developer", "Programmer", "Web Designer", "Freelancer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div className="text4">
          <p>
            Welcome to my portfolio! Here, I showcase my passion for programming
            and development through innovative projects. Feel free to explore,
            and reach out with any questions or collaboration opportunities.
            Thanks for visiting!
          </p>
        </div>
        <div className="button">
          <button>Download CV</button>
        </div>
      </div>
      <div className="area2">
        <span className="outer_circle"></span>
        <div className="profile_circel">
          <img src={mainpic} alt="" />
        </div>
      </div>
    </div>
  );
}
