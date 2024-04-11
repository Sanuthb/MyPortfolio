import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Smile Mart",
      description: "Fashion ecommerce website",
      image:"../../images/project1.png",
      link:'https://sanuthb.github.io/SmileMart/index.html',
    },
    {
      id: 2,
      title: "",
      description: "",
      image:"../../images/sample.jpg",

    },
    {
      id: 2,
      title: "",
      description: "",
      image:"../../images/sample.jpg",

    },
    {
      id: 2,
      title: "",
      description: "",
      image:"../../images/sample.jpg",

    },
  ];
  return (
    <div className="right_area3">
      <div className="heading">
        <h3>Projects</h3>
        <span></span>
      </div>
      <div className="project_container">
        {projects.map((item, index) => {
          return (
            <div className="project">
              <div className="project_image">
                <img
                  src={item.image}
                  alt="project1"
                />
              </div>
              <div className="project_info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <a href={item.link}>view</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
