import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Yohann Doucet</a>
      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">Mon parcours</a></li>
        <li><a href="#experience">Mes compétences</a></li>
        {/* <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/YOOGZE/" target="_blank"><BsFacebook/></a>
        <a href="https://instagram.com/hunnasz/?hl=fr" target="_blank"><AiFillInstagram/></a>
        <a href="https://twitter.com/hunnysamaa" target="_blank"><BsTwitter/></a>
        <a href="https://linkedin.com/in/yohann-doucet-125181134/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Huuuunny" target="_blank"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small></small>
      </div>
    </footer>
  )
}

export default Footer