import React from "react";
import "./Experience.css";
export default function Experience() {
  const experience = [
    {
      title: "Web Development Internship",
      company: "Camplain Innovations",
      dates: "12/2021 - 02/2022",
      description: "During my web development internship, I enhanced my front-end skills with CSS animations and React.js, while gained knowledge in  back-end technologies like Node.js, and Django.",
    },
    {
      title: "Web Development Internship",
      company: "Ekennis Software Service Ltd",
      dates: "07/2023 - 11/2023",
      description:
        "Excelled in implementing custom functionalities with Velo, optimizing website performance, Designing dynamic websites, Problem Solving , Received recognition for my contribution to project completion, Proficiency in leveraging Wix and Velo technologies.",
    },
    
  ];
  return (
    <div className="right_area2">
      <div className="heading">
        <h3>EXPERIENCE</h3>
        <span></span>
      </div>
      <div className="experience_section">
        <div className="experience_card">
          {experience.map((item, index) => {
            return (
              <div className="experience_card_container" key={index}>
                <div className="experience_card_title">
                  <h4>{item.title}</h4>
                </div>
                <div className="experience_card_company">
                  <h5>{item.company}</h5>
                  <h6>{item.dates}</h6>
                </div>
                <div className="experience_card_description">
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
