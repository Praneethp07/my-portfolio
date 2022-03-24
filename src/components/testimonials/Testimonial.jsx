import React from 'react'
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonial__container">
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar 1" />
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'></small>
          </div>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="avatar 2" />
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'></small>
          </div>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="avatar 3" />
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'></small>
          </div>
        </article>
        <article className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="avatar 4" />
            <h5 className='client__name'>Ernest Achiver</h5>
            <small className='client__review'></small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial