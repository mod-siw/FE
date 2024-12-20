import { useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import * as S from './Carousel.style';
import SvgSymbolMask1 from 'assets/SymbolMask1';
import SvgSymbolMask2 from 'assets/SymbolMask2';

interface CarouselProps {
  data: { id: number; img: string }[];
}

const Carousel = ({ data }: CarouselProps) => {
  const swiperRef = useRef<any>(null);

  const selectedData = useMemo(() => {
    const shuffled = [...data];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.length <= 8 ? shuffled : shuffled.slice(0, 8);
  }, [data]);

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
        {selectedData.map((item, i) => (
          <SwiperSlide key={item.id}>
            <S.Slide
              maskId={i % 2 === 0 ? 'symbol1-mask' : 'symbol2-mask'}
              src={item.img}
            />
            <S.Gradient maskId={i % 2 === 0 ? 'symbol1-mask' : 'symbol2-mask'} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SvgSymbolMask1 width={0} height={0} opacity={0} />
      <SvgSymbolMask2 width={0} height={0} opacity={0} />
    </S.Container>
  );
};

export default Carousel;
