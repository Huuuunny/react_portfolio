import React from 'react'
import CV from '../../assets/CV_Yohann_DOUCET_2024.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Telecharger CV</a>
        {/* <a href="#contact" className='btn btn-primary'>Contact</a> */}
    </div>
  )
}

export default CTA