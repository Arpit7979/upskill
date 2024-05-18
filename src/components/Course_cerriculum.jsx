import React from 'react'
import { MdOutlineStars } from "react-icons/md";

function Coursecerriculum() {
  return (
    <div className='course-cerriculum'>
      <h1 className='course-cerriculum-heading'>Unlock <span>6 Certificates</span> & <span>Internship Opportunities!</span></h1>
      <div className="course-container">
      <div className="first-course">
        <h2>Get 6 Industry Recognized Certificates!</h2>
        <img src="./image1.png" alt="" />
        <div className="first-course-tag">
            <div className='tag'>
                <MdOutlineStars/>
                <h3>Offecial and Verified</h3>
            </div>
            <div className='tag'>
                <MdOutlineStars/>
                <h3>Enhances Credibility</h3>
            </div>
        </div>
      </div>
      <div className="first-course second-course">
        <h2>Bag Internship Opportunities!</h2>
        <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
        <img src="./image.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Coursecerriculum
