import React from "react";
import "./About.css";
import Box from "../box/Box";
import about1 from "../../images/about1.png"
import about2 from "../../images/about2.png"
import about3 from "../../images/about3.png"
import about4 from "../../images/about4.png"
export default function About() {
  return (
    <div className="right_area" id="about">
      <div className="aboutsection">
        <div className="about_section1">
          <Box style={{backgroundColor:'lightblue'}} img={about1}/>
          <Box style={{backgroundColor:'lightcoral'}} img={about2}/>
          <Box style={{backgroundColor:'lemonchiffon'}} img={about3}/>
          <Box style={{backgroundColor:'lightsalmon'}} img={about4}/>
        </div>
        <div className="about_section2">
          <div className="heading">
            <h3>ABOUT ME .</h3>
            <span></span>
          </div>
          <div className="about_text1">
            <p>
              I'm a Freelancer with over 3 years of
              experience.
            </p>
          </div>
          <div className="about_text2">
            <p>
              I'm from Bengaluru. I code and create web elements
              for amazing people around the world. I like work with new people.
              New people new Experiences.
            </p>
          </div>
          <div className="about_text3">
            <div className="project_text">
              <div className="number">20</div>
              <div className="number_text">Project Completed</div>
            </div>
            <div className="client_text">
              <div className="number">2</div>
              <div className="number_text">Satisfied Clients.</div>
            </div>
          </div>
          <div className="about_btn">
            <div className="button">
              <button>Contact Me</button>
            </div>
            <div className="button">
              <button>Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
