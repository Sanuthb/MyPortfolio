import React from 'react'
import './Home.css'
import Sidebar from '../components/sidebar/Sidebar'
import Mainprofile from '../components/mainprofile/Mainprofile'
import About from '../components/About/About'
import Experience from '../components/experience/Experience'
import Projects from '../components/projects/Projects'
import EduandSkill from '../components/eduandskill/EduandSkill'
import Contact from '../components/Contact/Contact'
function Home() {
  return (
    <div className='hero'>
      <div className="box1">
        <Sidebar/>
      </div>
      <div className="box2">
        <Mainprofile/>
        <About/>
        <EduandSkill/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
