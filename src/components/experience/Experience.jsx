import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Ce que je connais</h5>
      <h2>Mes Compétences</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Front-end</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Javascript</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Bootstrap</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Tailwind</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>React</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Back-end</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Node</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>PHP</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Java</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>PostgreSQL</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Experience