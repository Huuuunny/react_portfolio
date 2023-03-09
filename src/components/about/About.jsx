import React from 'react'
import './about.css'
import Me from '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {RiFolderChartLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Faire connaissance</h5>
      <h2>Mon Parcours</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="About image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 an de formation</small>
            </article>

            {/* <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className='about_card'>
              <RiFolderChartLine className='about_icon'/>
              <h5>Projets</h5>
              <small>Projets scolaires + Personnels</small>
            </article>
          </div>

            <p>
              Après avoir exercé dans différents domaines, je souhaite donner un second souffle à ma carrière en faisant de ma passion pour l'informatique mon métier.
            </p>

            <p>
            Ma motivation ainsi que ma curiosité d'en apprendre plus tout les jours sera mon meilleur atout pour ma reconversion.
            </p>

            <a href="#contact" className='btn btn-primary'>Me Contacter</a>

        </div>
      </div>


    </section>
  )
}

export default About