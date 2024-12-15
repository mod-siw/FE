import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import * as S from './Carousel.style';
import SvgSymbolMask01 from 'assets/SymbolMask01';
import SvgSymbolMask02 from 'assets/SymbolMask02';

interface CarouselProps {
  data: { id: number; name: string; img: string }[];
}

const Carousel = ({ data }: CarouselProps) => {
  const swiperRef = useRef<any>(null);

  // useEffect(() => {
  //   const swiperInstance = swiperRef.current?.swiper;

  //   if (swiperInstance) {
  //     const handleSlideMove = () => {
  //       if (swiperInstance.isBeginning) {
  //         swiperInstance.slideNext(8000);
  //       }
  //     };

  //     swiperInstance.on('touchMove', handleSlideMove);

  //     return () => {
  //       swiperInstance.off('touchMove', handleSlideMove);
  //     };
  //   }
  // }, []);

  return (
    <S.Container>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true}
        slidesPerView="auto"
        freeMode={true}
      >
        {data.map((item, i) => (
          <SwiperSlide>
            <S.Slide
              maskId={i % 2 === 0 ? 'symbol01-mask' : 'symbol02-mask'}
              src={item.img}
            />
            <S.Gradient maskId={i % 2 === 0 ? 'symbol01-mask' : 'symbol02-mask'} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SvgSymbolMask01 width={0} height={0} opacity={0} />
      <SvgSymbolMask02 width={0} height={0} opacity={0} />
    </S.Container>
  );
};

export default Carousel;
