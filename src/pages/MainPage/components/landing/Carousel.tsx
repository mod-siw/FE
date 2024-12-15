import { useState, useEffect } from 'react';
import * as S from './Carousel.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import { slidesData } from 'constants/main/mainSlide';
import SnowEffect from './SnowEffect';
import ItemEffect from './ItemEffect';
import { mock } from '../Mock';

const Carousel = () => {
  const [reverseDirection, setReverseDirection] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleSlideChange = (swiper: any) => {
    if (swiper.isEnd) {
      setReverseDirection(true);
    } else if (swiper.isBeginning) {
      setReverseDirection(false);
    }
    if (!isAnimating) {
      setIsAnimating(true);
      setAnimationClass('animate-roll');

      const timer = setTimeout(() => {
        setAnimationClass('');
        setIsAnimating(false);
      }, 6000);

      return () => clearTimeout(timer);
    }
  };

  return (
    <S.Container>
      <Swiper
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: reverseDirection,
        }}
        speed={2000}
        slidesPerView="auto"
        freeMode={true}
        onSlideChange={handleSlideChange}
      >
        {slidesData.map((boxes, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <S.BoxContainer>
              {boxes.map((box, boxIndex) => {
                const dataIndex =
                  slideIndex > 0
                    ? slideIndex * boxes.length + boxIndex + 1
                    : slideIndex * boxes.length + boxIndex;

                return (
                  <ItemEffect
                    key={box.id}
                    top={box.top}
                    left={box.left}
                    angle={box.initialAngle}
                    animationClass={animationClass}
                    data={mock.data[dataIndex]}
                  />
                );
              })}
              <SnowEffect slideIndex={slideIndex} animationClass={animationClass} />
            </S.BoxContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Container>
  );
};

export default Carousel;
