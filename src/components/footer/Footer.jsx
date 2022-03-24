import React from 'react'
import './footer.css';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PRAX</a>
      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="mailto:praneeth.p101@gmail.com"><AiOutlineMail/></a>
      <a href="https://www.instagram.com/pra_neeth07/" target="_blank" rel='noreferrer'><AiOutlineInstagram/></a>
      <a href="https://api.whatsapp.com/send?phone=+919901179536" target="_blank" rel='noreferrer'><AiOutlineWhatsApp/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;.2022 PRAX portfolio. ALL rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer