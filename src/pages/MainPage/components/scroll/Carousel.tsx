import { useRef } from 'react';
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

  return (
    <S.Container>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, FreeMode]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        freeMode={true}
        slidesPerView={1.1}
        spaceBetween={60}
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id}>
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
