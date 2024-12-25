import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Item from 'components/Item/Item';

import { ClickedSnow } from 'assets/index';
import { ClickedSnowWhite } from 'assets/index';
import Onboarding from 'pages/ListPage/components/Onboarding';

import { useItemContext } from 'contexts/ItemContext';
import { useTheme } from 'contexts/ThemeContext';

interface GridProps {
  data: { id: number; img: string; frame: string; color: number }[];
  num?: string;
  isDarkMode?: boolean;
}

const MyGridBox: React.FC<GridProps & { animate?: boolean }> = ({
  data,
  num,
  animate = true,
  isDarkMode: propIsDarkMode,
}) => {
  const navigate = useNavigate();
  const { isDarkMode: contextIsDarkMode } = useTheme();
  const isDarkMode = propIsDarkMode ?? contextIsDarkMode; // Prop 우선

  const location = useLocation();
  const isFromMyPage = location.pathname.includes('my');

  const { itemId, setItemId, isItemClicked, setIsItemClicked } = useItemContext();
  const [fadeOut, setFadeOut] = useState<number | null>(null);

  useEffect(() => {
    if (isItemClicked && animate) {
      const timer = setTimeout(() => {
        setIsItemClicked(false);
        navigate(`/detail/${itemId}`, { state: { fromMyPage: isFromMyPage } });
        setItemId(0);
      }, 2800);

      return () => clearTimeout(timer);
    }
  }, [isItemClicked, navigate, animate]);

  const handleClick = (id: number) => {
    if (!animate) {
      setItemId(id);
      setIsItemClicked(true);
      navigate(`/detail/${id}`, { state: { fromMyPage: true } });
      return;
    }

    setFadeOut(id);
    setTimeout(() => {
      setItemId(id);
    }, 600);
    setTimeout(() => {
      setIsItemClicked(true);
    }, 1500);
  };

  const handleDefaultClick = () => {
    if (animate) return;

    navigate('/made', { state: { prev: '/my' } });
  };

  const filledData = data.slice();
  while (filledData.length < 9) {
    filledData.push({
      id: -1 * (filledData.length + 1),
      img: '',
      frame: '',
      color: 0,
    });
  }

  return (
    <Wrapper marginBottom={num}>
      <GridContainer>
        {filledData.map((item) => (
          <Block key={item.id}>
            {itemId === item.id ? (
              isDarkMode ? (
                <ClickedSnow />
              ) : (
                <ClickedSnowWhite />
              )
            ) : (
              <FadeWrapper isFading={fadeOut === item.id}>
                {item.img ? (
                  <Item
                    id={item.id}
                    img={item.img}
                    frame={item.frame}
                    color={item.color}
                    size={10}
                    onClick={() => handleClick(item.id)}
                  />
                ) : isDarkMode ? (
                  <ClickedSnow
                    style={{ width: '100%', height: '100%' }}
                    onClick={handleDefaultClick}
                    cursor="pointer"
                  />
                ) : (
                  <ClickedSnowWhite
                    style={{ width: '100%', height: '100%' }}
                    onClick={handleDefaultClick}
                    cursor="pointer"
                  />
                )}
              </FadeWrapper>
            )}
          </Block>
        ))}
      </GridContainer>
      {isItemClicked && <Onboarding />}
    </Wrapper>
  );
};

export default MyGridBox;

const Wrapper = styled.div<{ marginBottom?: string }>`
  padding: 3.7rem;
  margin: 4.3rem 0rem ${({ marginBottom }) => marginBottom || '4.3rem'} 0rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 40.2rem;
  max-height: 40.2rem;
  flex-shrink: 0;

  border: ${({ theme }) => theme.colors.gray02};
  background: ${({ theme }) => theme.colors.gray01};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 33.2rem;
  gap: 1.6rem;
`;

const Block = styled.div<{ isDefault?: boolean }>`
  display: flex;
  width: 10rem;
  height: 10rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.05;
  }
`;

const FadeWrapper = styled.div<{ isFading: boolean }>`
  ${({ isFading }) =>
    isFading &&
    css`
      animation: ${fadeOut} 0.5s forwards;
    `}
`;
