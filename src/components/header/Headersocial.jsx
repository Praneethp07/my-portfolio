import React from 'react'
import {TiSocialLinkedinCircular} from 'react-icons/ti';
import {TiSocialInstagram} from 'react-icons/ti';
import {BsGithub} from 'react-icons/bs';


const Headersocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/praneeth-p007" target="_blank" rel="noreferrer"><TiSocialLinkedinCircular/></a>
        <a href="https://github.com/Praneethp07" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/pra_neeth07/" target="_blank" rel='noreferrer'><TiSocialInstagram/></a>
    </div>
  )
}

export default Headersocial