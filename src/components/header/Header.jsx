import React from "react";
import './header.css';
import CTA from './CTA';
import me from '../../assets/me.png'
import Headersocial from './Headersocial';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typical from 'react-typical'
const Headder = () => {
  AOS.init();
  
  return (
    <header>
      <div className="container header__container">
      <div className="typical__text">
      <h1>Hi, I'm Praneeth</h1>
      <span>I'm a{' '}
        <Typical
          loop={Infinity}
          wrapper='span'
          steps={[
            'developer',
            900,
            'designer',
            900,
            'Open source contributer',
            900
          ]}
          />
      </span>
      </div>
        <section className='home'>
        <CTA/>
        <Headersocial/>
        <div className="me">
        <img src={me} alt="me" />
         </div>
        </section>
         <a href="#contact" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Headder