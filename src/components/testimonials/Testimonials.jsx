import React from 'react'
import './testimonials.css'
import conan from '../../assets/conan_edogawa.jpg'
import light from '../../assets/light_yagami.jpg'
import hinata from '../../assets/hinata.jpg'
import sanji from '../../assets/vinsmoke_sanji.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: conan,
    name: 'Conan Edogawa',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, ad non perferendis explicabo esse unde ea officiis dolores alias.'
  },
  {
    avatar: light,
    name: 'Light Yagami',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, ad non perferendis explicabo esse unde ea officiis dolores alias.'
  },
  {
    avatar: hinata,
    name: 'Hinata Hyuga',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, ad non perferendis explicabo esse unde ea officiis dolores alias.'
  },
  {
    avatar: sanji,
    name: 'Sanji Vinsmoke',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eveniet, ad non perferendis explicabo esse unde ea officiis dolores alias.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testimonials_container"
    // install Swiper modules
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          )
        }) 
      }
    </Swiper>
   </section>
  )
}

export default Testimonials