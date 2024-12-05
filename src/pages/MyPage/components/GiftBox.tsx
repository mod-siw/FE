import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { Union } from '../../../assets';

interface boxProps {
  isOpened: boolean;
  onOpen: () => void;
}

const GiftBox: React.FC<boxProps> = ({ isOpened, onOpen }) => {
  return (
    <Wrapper>
      <Ribbon />
      <Ribbon rotate={90} />
      <Ribbon isDiagonal rotate={isOpened ? 0 : 45} />
      <Ribbon isDiagonal rotate={isOpened ? -90 : -45} />
      {!isOpened && (
        <>
          <Square />
          <OpenBtn onClick={onOpen}>
            <Union width={12.75} />
            <span>Open</span>
            <Union width={12.75} />
          </OpenBtn>
        </>
      )}
    </Wrapper>
  );
};

export default GiftBox;

const Wrapper = styled.div`
  margin: 4.3rem 0rem 60.6rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40.2rem;
  height: 40.2rem;
  flex-shrink: 0;

  background: ${({ theme }) => theme.colors.gray01};
`;

const Ribbon = styled.div<{ isDiagonal?: boolean; rotate?: number }>`
  position: absolute;
  width: 8.04rem;
  height: 40.2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  background: ${({ theme }) => theme.colors.bgColor};
  z-index: ${({ isDiagonal }) => (isDiagonal ? 2 : 1)};
  ${({ rotate }) =>
    rotate !== undefined &&
    css`
      transform: rotate(${rotate}deg);
      transition: transform 1s ease;
    `}
`;

const Square = styled.div`
  position: absolute;
  width: 8.04rem;
  height: 8.04rem;
  transform: rotate(45deg);
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  background: ${({ theme }) => theme.colors.bgColor};

  z-index: 3;
`;

const OpenBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
  z-index: 4;

  span {
    color: ${({ theme }) => theme.colors.white};

    /* body16_semibold */
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem; /* 137.5% */
  }
`;
