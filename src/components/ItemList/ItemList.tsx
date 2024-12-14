import React, { useEffect, useState } from 'react';
import * as S from './ItemList.style';
import Item from 'components/Item/Item';

import { useItemContext } from 'contexts/ItemContext';
import { ClickedSnow } from 'assets/index';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

interface ItemListProps {
  data: { id: number; img: string; frame: string; color: number }[];
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

const ItemList: React.FC<ItemListProps> = ({
  data,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}) => {
  const { itemId, setItemId, isItemClicked, setIsItemClicked } = useItemContext();
  const [fadeOut, setFadeOut] = useState<number | null>(null);
  const navigate = useNavigate();

  const isNone = data.length === 0 ? true : false;

  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '100px',
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  // 클릭된 아이템에 대해 빈 프레임으로 2초 간 표기
  const handleClick = (id: number) => {
    setFadeOut(id); // 클릭된 아이템 id로 fadeout 활성화
    setTimeout(() => {
      setItemId(id);
    }, 600);
    setTimeout(() => {
      setIsItemClicked(true);
    }, 1500);
  };

  // 6.5초 뒤에 onboarding 끝난 후 상세 페이지로 이동
  useEffect(() => {
    if (isItemClicked) {
      const timer = setTimeout(() => {
        setIsItemClicked(false);
        navigate('/detail/1');
        setItemId(0);
      }, 6500);

      return () => clearTimeout(timer);
    }
  }, [isItemClicked, navigate]);

  return (
    <S.Container>
      {isNone ? (
        <span>조회된 item이 없습니다.</span> //임시
      ) : (
        data.map((item) => (
          <React.Fragment key={item.id}>
            {itemId === item.id ? (
              <ClickedSnow />
            ) : (
              <S.FadeWrapper isFading={fadeOut === item.id}>
                <Item
                  id={item.id}
                  img={item.img}
                  frame={item.frame}
                  color={item.color}
                  size={16}
                  onClick={() => handleClick(item.id)}
                />
              </S.FadeWrapper>
            )}
          </React.Fragment>
        ))
      )}
      <div>
        {isFetchingNextPage ? <span></span> : hasNextPage && <div ref={ref}></div>}
      </div>
    </S.Container>
  );
};

export default ItemList;
