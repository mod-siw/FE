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
  isSearch: boolean;
}

const ItemList: React.FC<ItemListProps> = ({
  data,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
  isSearch,
}) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const { itemId, setItemId, isItemClicked, setIsItemClicked } = useItemContext();
  const [fadeOut, setFadeOut] = useState<number | null>(null); // 클릭한 아이템 페이드아웃

  // 무한스크롤
  const [ref, inView] = useInView({
    threshold: 0.1,
    rootMargin: '10px',
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

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
        navigate(`/detail/${itemId}`, isSearch ? { state: { prev: '/search' } } : {});
        setItemId(0);
      }, 2800); // 3초 뒤에 onboarding 끝난 후 상세 페이지로 이동

      return () => clearTimeout(timer);
    }
  }, [isItemClicked, navigate]);

  return (
    <S.Container>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {itemId === item.id ? (
            isDarkMode ? (
              <S.SnowDiv>
                <ClickedSnow />
              </S.SnowDiv>
            ) : (
              <S.SnowDiv>
                <ClickedSnowWhite />
              </S.SnowDiv>
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
