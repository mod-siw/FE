import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.65);
  z-index: 100;

  animation: ${fadeIn} 0.4s ease-in-out;
`;

export const Container = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
`;

const expandAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(100);
  }
`;

export const Box = styled.div<{ animationStart: boolean; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color};
  z-index: 1;

  transform-origin: center;

  ${({ animationStart }) =>
    animationStart &&
    css`
      animation: ${expandAnimation} 4s forwards;
    `}
`;
