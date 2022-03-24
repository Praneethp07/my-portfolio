import React from 'react'
import CV from '../../assets/CV.pdf';
const CTA = () => {
  return (
    <div className="cta">
        <a className='btn' href={CV} download>Download CV</a>
        <a className='btn btn-primary' href="#contact">let's talk</a>
    </div>
  )
}

export default CTA