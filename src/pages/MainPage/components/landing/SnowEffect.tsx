import React from 'react';
import * as S from './Carousel.style';
import { MiniSymbol2 } from 'assets';
import { snowData } from 'constants/mainSlide';

interface SnowEffectProps {
  slideIndex: number;
  animationClass: string;
}

const SnowEffect = ({ slideIndex, animationClass }: SnowEffectProps) => (
  <>
    {snowData[slideIndex]?.map((snow) => (
      <S.Snow key={snow.id} top={snow.top} left={snow.left} className={animationClass}>
        <MiniSymbol2 />
      </S.Snow>
    ))}
  </>
);

export default React.memo(SnowEffect);
