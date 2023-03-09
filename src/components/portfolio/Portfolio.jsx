import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tokogadget - Search Menu',
    github: 'https://github.com',
    demo : 'https://dribbble.com/shots/20295408-Tokogadget-Search-Menu'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Solar PV System Components',
    github: 'https://github.com',
    demo : 'https://dribbble.com/shots/20347296-Solar-PV-System-Components'
  },
  {
    id: 3,
    image: IMG3,
    title: 'KlimatX - Landing Page',
    github: 'https://github.com',
    demo : 'https://dribbble.com/shots/20200697-KlimatX-Landing-Page'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Shoesmu - Ecommerce Dashboard',
    github: 'https://github.com',
    demo : 'https://dribbble.com/shots/20432213-Shoesmu-Ecommerce-Dashboard'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Ivist - EV Charging Website Concept',
    github: 'https://github.com',
    demo : 'https://dribbble.com/shots/20493021-Ivist-EV-Charging-Website-Concept'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Dexx - Stock Investment Website',
    github: 'https://github.com',
    demo : 'https://dribbble.com/shots/20798787-Dexx-Stock-Investment-Website'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item_image">
                <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item_cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio