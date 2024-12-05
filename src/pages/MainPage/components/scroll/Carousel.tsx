import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import * as S from './Carousel.style';
import SvgSymbolMask01 from '../../../../assets/SymbolMask01';
import SvgSymbolMask02 from '../../../../assets/SymbolMask02';

const Carousel: React.FC = () => {
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
        <SwiperSlide>
          <S.Slide
            maskId="symbol01-mask"
            src="https://i.namu.wiki/i/N0-XBPJVVzyqJBfiRGk90VJbsxcM7_sifBwrc-JKdPpzrwGa4vYczODPTXWRSMJafAOm59RRoxQEnlOaN54BlmfavDsb6P2ztqIqfHpyRa5_YKydVwjjiB7Bmw73-o1fLn_5s3a6Iy1b6URXHuGLkf0rSvR6KWv3pbloTaGTi0A.webp"
          />
          <S.Gradient maskId="symbol01-mask" />
        </SwiperSlide>
        <SwiperSlide>
          <S.Slide
            maskId="symbol02-mask"
            src="https://i.namu.wiki/i/N0-XBPJVVzyqJBfiRGk90ZHrJekeVZ8O1RhhmyRj40ed3IjBKfy95M6pXsG6bkY8-OZfIaCNSasHDPwJ6yoXJV0XYdAqq_pwV9Vc6TOFC8K44ePg3KXODC10U4oHZ5fAbDz5MwEYtMj90ML4Bf6_hJx-xrKxO2pJ_raMI4_CEzc.webp"
          />
          <S.Gradient maskId="symbol02-mask" />
        </SwiperSlide>
      </Swiper>
      <SvgSymbolMask01 width={0} height={0} opacity={0} />
      <SvgSymbolMask02 width={0} height={0} opacity={0} />
    </S.Container>
  );
};

export default Carousel;
