import './contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6sh40rk', 'template_zfh70xc', form.current, 'LjXpzMc5Vm6OL14sT')
    e.target.reset();
  };
  AOS.init();
  return (
    <section  data-aos="fade-right" data-aos-delay='300' id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>praneeth.p101@gmail.com</h5>
          <a href="mailto:praneeth.p101@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
          <BsInstagram className='contact__option-icon'/>
          <h4>instagram</h4>
          <h5>username:pra_neeth07</h5>
          <a href="https://www.instagram.com/pra_neeth07/" target="_blank" rel='noreferrer'>Dm me on instagram</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 9901179536</h5>
          <a href="https://api.whatsapp.com/send?phone=+919901179536" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/* end */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message"rows="7" placeholder="Your message" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact