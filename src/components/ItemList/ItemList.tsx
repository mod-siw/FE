import React, { useEffect, useState } from 'react';
import * as S from './ItemList.style';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// components
import Item from 'components/Item/Item';
import { ClickedSnow } from 'assets/index';
import { ClickedSnowWhite } from 'assets/index';

// data
import { useItemContext } from 'contexts/ItemContext';
import { useTheme } from 'contexts/ThemeContext';

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
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const { itemId, setItemId, isItemClicked, setIsItemClicked } = useItemContext();
  const [fadeOut, setFadeOut] = useState<number | null>(null); // 클릭한 아이템 페이드아웃

  // 무한스크롤
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '100px',
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
      console.log(inView, '다음페이지');
    }
  }, [inView]);

  console.log(inView, ': inView');

  // 아이템 클릭 시 애니메이션
  const handleClick = (id: number) => {
    setFadeOut(id); // 클릭된 아이템 id로 fadeout 활성화
    setTimeout(() => {
      setItemId(id);
    }, 600);
    setTimeout(() => {
      setIsItemClicked(true);
    }, 1500); // 클릭된 아이템에 대해 빈 프레임으로 1.5초 간 표기
  };

  useEffect(() => {
    if (isItemClicked) {
      const timer = setTimeout(() => {
        setIsItemClicked(false);
        navigate(`/detail/${itemId}`);
        setItemId(0);
      }, 6500); // 6.5초 뒤에 onboarding 끝난 후 상세 페이지로 이동

      return () => clearTimeout(timer);
    }
  }, [isItemClicked, navigate]);

  return (
    <S.Container>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {itemId === item.id ? (
            isDarkMode ? (
              <ClickedSnow />
            ) : (
              <ClickedSnowWhite />
            )
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
      ))}
      <div>
        {isFetchingNextPage ? (
          <span></span>
        ) : (
          hasNextPage && <S.BottomDiv ref={ref}></S.BottomDiv>
        )}
      </div>
    </S.Container>
  );
};

export default ItemList;
