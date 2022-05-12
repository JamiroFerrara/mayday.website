import React from 'react'
import st from './Carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Carousel ({imgSourcesStatic}) {

  function cicleImages(index) {
    if (index < imgSourcesStatic.length -1)
    {
      return index +1;
    }
    else
    {
      return 0;
    }
  }

  function cicleImagesBack(index) {
    if (index < imgSourcesStatic.length -1)
    {
      return index +1;
    }
    else
    {
      return 0;
    }
  }

  return (
    <div className={st.container}>
      <div className={st.mediaGroup}>
        <Swiper spaceBetween={0} slidesPerView={1}>
          {
            imgSourcesStatic.map((item)=> {return (
                <SwiperSlide><img className={st.img} src={item}/></SwiperSlide>
            )})
          }
        </Swiper>
      </div>
    </div>
  )
}


export default Carousel