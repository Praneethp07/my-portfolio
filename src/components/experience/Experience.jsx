import React from 'react'
import './experience.css';
import {BsFillPatchCheckFill } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Experience = () => {
  AOS.init();
  return (
    
    <section id='experience'>
      <h5 data-aos="fade-left">Skill's i have</h5>
      <h2 data-aos="fade-right">My Experience</h2>
      <h2 data-aos="fade-left">--WEB DEVELOPMENT--</h2>
      <div className="container experience__container">
          <div data-aos="fade-right" className="frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>intermediate</small>
                </div>
               
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
               <div>
               <h4>CSS</h4>
                <small className='text-light'>intermediate</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                  <h4>JAVASCRIPT</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
               <div>
               <h4>BOOTSTRAP</h4>
                <small className='text-light'>intermediate</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>REACT</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
            </div>
          </div>
          <div data-aos="fade-left" className="backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>PYTHON</h4>
                <small className='text-light'>intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>PHP</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>NODEjs</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>JQUERY</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>JAVA</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>MONGO-DB</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <h1 data-aos="fade-out">--Miscellaneous--</h1>
        <div className="container experience__container">
          <div data-aos="fade-up" className="other">
            <h3>Blockchain and Cybersecurity</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>solidity</h4>
                <small className='text-light'>beginer</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
               <div>
               <h4>RUST</h4>
                <small className='text-light'>beginer</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                  <h4>shell script</h4>
                <small className='text-light'>intermediate</small>
                </div>
              </article>
            </div>
          </div>
          <div data-aos="fade-down" className="other">
            <h3>Other</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
                <div>
                <h4>C</h4>
                <small className='text-light'>intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icons'/>
               <div>
               <h4>C++</h4>
                <small className='text-light'>intermediate</small>
               </div>
              </article>
            </div>
          </div>
        </div>
      </section>
     
  )
}

export default Experience