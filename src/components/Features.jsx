import React from 'react'
import { FaBook } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BsPatchQuestion } from "react-icons/bs";
import { MdOutlineCloudDone } from "react-icons/md";

function Features() {
  return (
    <div className='feature-page'>
      <div className="feature">
        <FaBook className="feature-logo" />
        <div className="feature-text">
            <h1>24</h1>
            <h2>Courses</h2>
        </div>
      </div>
      <div className="feature">
        <PiStudent className="feature-logo" />
        <div className="feature-text">
            <h1>30K+</h1>
            <h2>Learners</h2>
        </div>
      </div>
      <div className="feature">
        <BsPatchQuestion className="feature-logo" />
        <div className="feature-text">
            <h1>100K+</h1>
            <h2>Doubts Solved</h2>
        </div>
      </div>
      <div className="feature">
        <MdOutlineCloudDone className="feature-logo" />
        <div className="feature-text">
            <h1>10K+</h1>
            <h2>Students Project</h2>
        </div>
      </div>
    </div>
  )
}

export default Features
