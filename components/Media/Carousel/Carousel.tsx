import React from 'react'
import st from './Carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const imgSourcesStatic = [
  'https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_398,w_1080/v1649490823/TP1_9536_oobzfm.jpg',
  'https://res.cloudinary.com/mayday-soundsystem/image/upload/c_crop,h_400,w_1080,y_265/v1649490830/TP1_9579_pmpqzn.jpg',
  'https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080/v1649492162/IMG_0850_efcxd3.jpg',
  'https://res.cloudinary.com/mayday-soundsystem/image/upload/c_fill,h_400,w_1080,x_2860,y_1867/v1649491859/IMG_0834_i747ll.jpg',
]

const Carousel = () => {

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

export default Carousel