import React from "react";
import './Sidebar.css'
import profile from '../../images/mypic.png'
import {FaInstagram,FaFacebookF,FaLinkedinIn,FaHome,FaServicestack  } from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'
import { ImProfile } from "react-icons/im";
import { GrCertificate,GrContactInfo  } from "react-icons/gr";
import {Link} from "react-router-dom"
export default function Sidebar() {
  return (
    <div className="container">
      <div className="circle"><div className="profile_pic"><img src={profile} alt="profile" /></div></div>
      <div className="profile_name"><h4>MR SANUTH</h4></div>
      <div className="navlist">
        <ul>
            <li><Link to="/" className="mylinks"><FaHome className="icons"/>Home</Link></li>
            <li><Link to="about" className="mylinks"><ImProfile className="icons"/>About</Link></li>
            <li><Link to="experience" className="mylinks"><FaServicestack className="icons"/>Experience</Link></li>
            <li><Link to="projects" className="mylinks"><GrCertificate className="icons"/>Projects</Link></li>
            <li><Link to="contact" className="mylinks"><GrContactInfo className="icons"/>Contact</Link></li>
        </ul>
      </div>
      <div className="social_icons">
        <FaFacebookF/> 
        <FaInstagram/>
        <FaLinkedinIn/>
        <FaXTwitter/>
      </div>
    </div>
  );
}
