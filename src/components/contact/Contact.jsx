import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_it91ghg', 'template_gim06k8', form.current, '5rBb4NV22tHLJxcYe')

    e.target.reset(); 
   };
  return (
    <section id="contact">
      <h5>Pous en savoir plus</h5>
      <h2>Contactez Moi</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
        <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>doucet.yohann@gmail.com</h5>
            <a href="mailto:doucet.yohann@gmail.com">Envoyer un message</a>
          </article>

          <article className="contact_option">
          <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4> 
            <h5>Yng Doog</h5>
            <a href="https://m.me/YOOGZE" target="_blank">Envoyer un message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom' required />
          <input type="email" name="email" placeholder='Email' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact