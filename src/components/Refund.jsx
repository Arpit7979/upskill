import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { BsEmojiSunglasses } from "react-icons/bs";

function Refund() {
  return (
    <div className='refund-page'>
      <h1 className='refund-heading'>Don't miss out on this <span>limited-time</span> <br/> <span>opportunity</span> to learn <span>for Free!</span></h1>
      <div className="refund">
        <h3>100% Refund offer <BsEmojiSunglasses/> </h3>
        <div className="slider-content">
        <p>20 seats Left</p>
        <div className="refund-slider">
            <div className="rectangle"></div>
            <div className="circle"></div>
        </div>
        </div>
        <div className='offer-time'>
            <CiClock2/>
            <h4>Offer end in 10:00Mins</h4>
        </div>
      </div>
      <h2 className='working-heading'>How does it work?</h2>
    
      <div className='working-container'>
      <div className="working-details">
      <div className="shape">
            <h3>Step 1</h3>
        </div>
        <div className='working-detail'>
            <h3>Step 1 : Enroll into your favorite course for only ₹1,499</h3>
            <img src="https://s3-alpha-sig.figma.com/img/ba84/89c7/4f9a67431f73f82b3d936cdf9542725c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QCPWaNRKAcph5s0N90cJgoB5y9ICi6fiz9Ip7Bo7tTyBpB~FmAe4rW~WueoN6HRW4SaVLeZpAF6DCJrfDIrVe~I~RtX5c8JzpQtMpHoZfEPR4oEdTE7ysPnlEj~oALc0CnNdwqhqsLd-ioPQ45y89wBwEB84Nt6NZha0Oo3iJCAKf5RlrgZyLEaVPJya2BKTVPqy~88NlLuqleAZkyi0gEYHS1zts7RTTmxJ6YNGyj6PctuOfGril-rSQj8AwfLkfNpBo8vt4EoovafkKPHi2PEMfn8vizrggL749bCpq9QnjAuOYHmvisDtlfevEygORW2Z9XmJtDlyEKsZ8zB3hA__" alt="" />
            <p>Start Learning with <span>Lifetime Course Access.</span></p>
        </div>
      </div>
      <div className="working-details">
      <div className="shape">
            <h3>Step 2</h3>
        </div>
        <div className='working-detail'>
            <h3>Step 2: Complete Course & Assignments within 2 Years!</h3>
            <div className='working-detail-feature'>
                <h2>2</h2>
                <p>years time from the date of enrollment</p>
            </div>
            <p>Finish the course within <span>2 Years</span> to Qualify for Refund.</p>
        </div>
      </div>
      <div className="working-details">
            <div className="shape">
                <h3>Step 3</h3>
            </div>
        <div className='working-detail'>
            <h3>Step 3: Receive 100% Refund upon completion</h3>
            <div className='working-detail-feature'>
                <h2>100%</h2>
                <p>Enrollment Fee is refunded</p>
            </div>
            <p>Upon Course Completion within <span>2 Years</span>, Get Your <span>₹1,499 Back</span>.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Refund
