import React from 'react';
import * as S from './Carousel.style';
import Item from 'components/Item/Item';

interface ItemEffectProps {
  top: string;
  left: string;
  angle: string;
  animationClass: string;
  data: {
    id: number;
    img: string;
    frame: string;
    color: number;
  };
}

const ItemEffect = ({ top, left, angle, animationClass, data }: ItemEffectProps) => (
  <S.Box top={top} left={left} angle={angle} className={animationClass}>
    <Item id={data.id} img={data.img} frame={data.frame} color={data.color} size={12} />
  </S.Box>
);

export default React.memo(ItemEffect);
