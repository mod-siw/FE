import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Carousel.style';
import Item from 'components/Item/Item';
import { Post } from 'types/post';

interface ItemEffectProps {
  top: string;
  left: string;
  angle: string;
  data: Post;
}

const ItemEffect = ({ top, left, angle, data }: ItemEffectProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <S.Box $top={top} $left={left} $angle={angle}>
      <Item
        id={data.id}
        img={data.img}
        frame={data.frame}
        color={data.color}
        size={10.2}
        onClick={handleClick}
      />
    </S.Box>
  );
};

export default React.memo(ItemEffect);
