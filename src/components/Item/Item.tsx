import React from 'react';
import * as S from './Item.style';
import { useRenderFrame } from 'hooks/useRenderFrame';

interface ItemProps {
  id: number;
  img: string;
  frame: string;
  color: number;
  size: number;
  onClick?: () => void;
}

const Item: React.FC<ItemProps> = ({ id, img, frame, color, size, onClick }) => {
  const { renderFrame } = useRenderFrame();

  return (
    <S.Wrapper size={size} onClick={onClick}>
      <S.FrameWrapper>{renderFrame(frame, color)}</S.FrameWrapper>
      <S.Image src={img} alt="item_img" />
    </S.Wrapper>
  );
};

export default Item;
