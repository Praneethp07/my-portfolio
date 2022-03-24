import React from 'react'
import './service.css';
import {BiCheck} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = () => {
  AOS.init();
  return (
    <section id='service'>
      <h5 data-aos="fade-right" data-aos-delay='300'>What I Offer</h5>
      <h2 data-aos="fade-left" data-aos-delay='300'>SERVICES</h2>
      <div className="container service__container">
        <article data-aos="fade-right" data-aos-delay='300' className='service'>
          <div  className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='serivce__list'>
            <li>
              <BiCheck className='check__icon'/>
              <p>Custom Web Design & Development</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Corporate Branding & Graphics Design</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Wearables App Design</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Product Design</p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article data-aos="fade-up" data-aos-delay='300' className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='serivce__list'>
            <li>
              <BiCheck className='check__icon'/>
              <p>Ongoing Website Maintenance</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p> WordPress Support</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Hosting</p>
            </li>
            
            <li>
              <BiCheck className='check__icon'/>
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Graphic Design</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Ad Design</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>Social Media Management</p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article data-aos="fade-left" data-aos-delay='300' className='service'>
          <div className="service__head">
            <h3>CyberSecurity</h3>
          </div>
          <ul className='serivce__list'>
            <li>
              <BiCheck className='check__icon'/>
              <p>Protection of assets from cybercrime activity</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>A response plan following a cyberattack incident</p>
            </li>
            <li>
              <BiCheck className='check__icon'/>
              <p>A backup plan to recover all lost or stolen data</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service