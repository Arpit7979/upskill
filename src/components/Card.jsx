import React from 'react'

function Card({background,boxshadow}) {
  return (
    <div className='card' style={{background:background,boxShadow:boxshadow}}>
      <div className="left-card">
        <h1>Enroll for DataScience Bundle @₹1,499 <span>₹2,600</span></h1>
        <p>Become an Expert in the data science field by enrolling into 6 Extensive courses!</p>
        <button>Enroll Now</button>
      </div>
      <div className="right-card">
      <div>
      <h6>Total number of Courses</h6>
      <h5>6</h5>
      </div>
      <div>
      <h6>Total number of Certificates</h6>
      <h5>6</h5>
      </div>
      <div>
      <h6>Access to Courses</h6>
      <h5>Lifetime</h5>
      </div>
      </div>
    </div>
  )
}

export default Card
