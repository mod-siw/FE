import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Item from 'components/Item/Item';

import { Mydefaultimg } from '../../../assets';

interface GridProps {
  data: { id: number; img: string; frame: string; color: number }[];
  num?: string;
}

const MyGridBox: React.FC<GridProps & { animate?: boolean }> = ({
  data,
  num,
  animate = true,
}) => {
  const [fadeOut, setFadeOut] = useState<number | null>(null); // 애니메이션 상태
  const [clickedId, setClickedId] = useState<number | null>(null); // 클릭된 아이템 ID
  const navigate = useNavigate();

  // 클릭 시 애니메이션과 navigate 적용
  const handleClick = (id: number) => {
    if (animate) {
      setFadeOut(id);
      setTimeout(() => {
        setClickedId(id);
      }, 600); // 애니메이션 지속 시간과 동일
      setTimeout(() => {
        navigate(`/detail/${id}`);
      }, 1500); // 애니메이션 후 이동
    } else {
      navigate(`/detail/${id}`); // 바로 이동
    }
  };

  const filledData = [...data];
  while (filledData.length < 9) {
    filledData.push({
      id: -filledData.length,
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
            {clickedId === item.id && animate ? (
              <ClickedSnow />
            ) : (
              <FadeWrapper isFading={animate && fadeOut === item.id}>
                {item.id > 0 ? (
                  <Item
                    id={item.id}
                    img={item.img}
                    frame={item.frame}
                    color={item.color}
                    size={10}
                    onClick={() => handleClick(item.id)}
                  />
                ) : (
                  <Mydefaultimg style={{ width: '100%', height: '100%' }} />
                )}
              </FadeWrapper>
            )}
          </Block>
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default MyGridBox;

const Wrapper = styled.div<{ marginBottom?: string }>`
  padding: 3.7rem;
  margin: 4.3rem 0rem ${({ marginBottom }) => marginBottom || '4.3rem'} 0rem;
  width: 40.2rem;
  height: 40.2rem;
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

  cursor: ${({ isDefault }) => (isDefault ? 'default' : 'pointer')};
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

const ClickedSnow = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mint01}; // 클릭 시 표시되는 스타일
`;
