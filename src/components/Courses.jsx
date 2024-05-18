import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import "../App.css"

function Courses() {
  return (
    <div className='courses'>
      <div className="courses-tag">
      <h4>DATASCIENCE COURSE LEARNING PATH</h4>
      </div>
      <div className="courses-heading">
      <h1><span>Data Science</span> Course Curriculum</h1>
      </div>
      <div className="courses-lists">
        <div className="courses-list">
            <div>
            <h2>C++</h2>
            <p>Learn c++ for strong programming fundamentals</p>
            </div>
            <div className='courses-btn'>
                <IoEyeOutline />
                <button>View Curriculum</button>
            </div>
        </div>
        <div className="courses-list">
            <div>
            <h2>MERN Stack</h2>
            <p>Master the MERN stack for high-demand project</p>
            </div>
            <div className='courses-btn'>
                <IoEyeOutline />
                <button>View Curriculum</button>
            </div>
        </div>
        <div className="courses-list">
            <div>
            <h2>Data Structure & Algorithm</h2>
            <p>Excell in data structure and algorithms for interview success</p>
            </div>
            <div className='courses-btn'>
                <IoEyeOutline />
                <button>View Curriculum</button>
            </div>
        </div>
        <div className="courses-list last-course">
            <div>
            <h2>Competitve Programming</h2>
            <p>Excell in data structure and algorithms for interview success</p>
            </div>
            <div className='courses-btn'>
                <IoEyeOutline />
                <button>View Curriculum</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
