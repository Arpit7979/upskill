import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";
import { VscWorkspaceUnknown } from "react-icons/vsc";
import { FaPaperPlane } from "react-icons/fa";


function Hero() {
  return (
    <div className='hero'>
      <div className="hero-tag">
        <h3> <FaGraduationCap /> An IIT Delhi Alumni initiative </h3>
      </div>
      <h1 className='hero-heading'>Become an expert in the<br/> field of <span>Data Science</span> <br/> <span>with 6 courses</span></h1>
      <h3>A specially crafted Tech Kickstarter, with 5+ extensive online courses</h3>
      <div className='hero-features'>
        <div className='hero-feature'>
            <MdOutlineStars  />
            <h3>Personal Mentorship</h3>
        </div>
        <div className='hero-feature'>
            <MdOutlineStars  />
            <h3>Internship Assistance</h3>
        </div>
        <div className='hero-feature'>
            <MdOutlineStars  />
            <h3>Industry Certified Courses</h3>
        </div>
      </div>
      <div className='hero-btn'>
        <button className='enroll'>Enroll Now <FaPaperPlane /></button>
        <button className='enroll know-more'>Know More <VscWorkspaceUnknown /></button>
      </div>
    </div>
  )
}

export default Hero
