import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Portfolio = () => {
  AOS.init();
  return (
    <section id='portfolio'>
      <h5 data-aos="fade-right" data-aos-delay='300'>My Recent Work</h5>
      <h2 data-aos="fade-left" data-aos-delay='300'>Portfolio</h2>
      <div className="container portfolio__container">
        <article data-aos="flip-left" data-aos-delay='300' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>web application which will tell your your age in days</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Praneethp07/age_in_days" className='btn'>Github</a>
          <a href="https://praneethp07.github.io/age_in_days/" className='btn btn-primary'>live demo</a>
          </div>
        </article>
        <article  data-aos="flip-left" data-aos-delay='300' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="img1" />
          </div>
          <h3> A instagram bot which will take you to instagram directly</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Praneethp07/insabot" className='btn'>Github</a>
          <a href="https://github.com/Praneethp07/insabot" className='btn btn-primary'>live demo</a>
          </div>
        </article>
        <article  data-aos="flip-left" data-aos-delay='300' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="img1" />
          </div>
          <h3>Sahyadri registration form feel free to fill in </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Praneethp07/reg_form" className='btn'>Github</a>
          <a href="https://praneethp07.github.io/reg_form/" className='btn btn-primary'>live demo</a>
          </div>
        </article>
        <article  data-aos="flip-left" data-aos-delay='300' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="img1" />
          </div>
          <h3>comming soon.......</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
          <a href="www.google.com" className='btn btn-primary'>live demo</a>
          </div>
        </article>
        <article  data-aos="flip-left" data-aos-delay='300' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="img1" />
          </div>
          <h3>comming soon.......</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
          <a href="www.google.com" className='btn btn-primary'>live demo</a>
          </div>
        </article>
        <article  data-aos="flip-left" data-aos-delay='300' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="img1" />
          </div>
          <h3>comming soon.......</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
          <a href="www.google.com" className='btn btn-primary'>live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio