import React from 'react';
import * as S from './Item.style';
import { useRenderFrame } from 'hooks/useRenderFrame';
import { useItemContext } from 'contexts/ItemContext';

interface ItemProps {
  id: number;
  img: string;
  frame: string;
  color: number;
  size: number;
}

const Item: React.FC<ItemProps> = ({ id, img, frame, color, size }) => {
  const { setItemId, setIsItemClicked } = useItemContext();
  const { renderFrame } = useRenderFrame();

  const handleClick = () => {
    setItemId(id);
    setIsItemClicked(true);
  };

  return (
    <S.Wrapper size={size} onClick={handleClick}>
      <S.FrameWrapper>{renderFrame(frame, color)}</S.FrameWrapper>
      <S.Image src={img} alt="item_img" />
    </S.Wrapper>
  );
};

export default Item;
