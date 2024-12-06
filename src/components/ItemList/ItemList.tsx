import React from 'react';
import * as S from './ItemList.style';
import Item from 'components/Item/Item';

interface ItemListProps {
  data: { id: number; img: string; frame: string; color: number }[];
}

const ItemList: React.FC<ItemListProps> = ({ data }) => {
  return (
    <S.Container>
      {data.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          img={item.img}
          frame={item.frame}
          color={item.color}
          size={16}
        />
      ))}
    </S.Container>
  );
};

export default ItemList;
