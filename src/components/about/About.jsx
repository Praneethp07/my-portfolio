import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css';

const about = () => {
  AOS.init();
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div data-aos='fade-right' data-aos-delay='100' className="about__me">
          <div id='pic' className="about__me-image">
            <img src={ME} alt="me" />
          </div>
          </div>
        <div data-aos='fade-left' data-aos-delay='100' className="about__content">
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>experience</h5>
            <small>undergrad student</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>currantly none</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>projects</h5>
            <small>5+ completed</small>
          </article>
        </div>
      </div>
      <div className="container para-btn">
      <p data-aos='fade-up' data-aos-delay='200'>
      I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, I turn your requirements into CMS-ified and ecommerce-ified websites - on time and on budget.
        </p>
        <a className='btn btn-primary' href="#contact">let's talk</a>
      </div>
    </section>
  )
}

export default about