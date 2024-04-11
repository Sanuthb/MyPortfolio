import React from "react";
import "./EduandSkill.css";

export default function EduandSkill() {
  const education = [
    {
      school: "ST Francis ICSE School",
      degree: "Secondary Education",
      fieldofstudy: "ICSE",
    },
    {
      school: "Christ Academy Junior College",
      degree: "Higher Secondary Education",
      fieldofstudy: "PCMC",
    },
    {
      school: "Christ Academy Institute For Advanced Studies",
      degree: "Bachelor's Degree",
      fieldofstudy: "BCA",
    },
  ];

  const skills = [
    {
      title: "Front End Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Native React"],
    },
    {
      title: "Back End Development",
      skills: ["Node JS", "Express"],
    },
    {
      title: "Miscellaneous",
      skills: ["SQL", "MongoDB", "IOT", "Arduino"],
    },
  ];
  return (
    <div className="right_area1">
      <div className="heading">
        <h3>EDUCATION & SKILLS</h3>
        <span></span>
      </div>
      <div className="eduandskill">
        <div className="education">
          {education.map((item, index) => {
            return (
              <div className="education_item" key={index}>
                <div className="school">
                  <h4>{item.school}</h4>
                </div>
                <div className="degree">
                  <p>{item.degree}</p>
                </div>
                <div className="fieldofstudy">
                  <p>{item.fieldofstudy}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="skills">
          <div className="skill_title">
            <h4>My Skills</h4>
          </div>
          <div className="skillsets">
            {skills.map((item, index) => {
              return (
                <div className="skill_item" key={index}>
                  <div className="skill_title">
                    <h5>{item.title}</h5>
                  </div>
                  <div className="skill_list">
                    {item.skills.map((skill, index) => {
                      return (
                        <div className="skill_items" key={index}>
                          <p>{skill}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
