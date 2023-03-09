import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/yohann-doucet-125181134/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Huuuunny" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials