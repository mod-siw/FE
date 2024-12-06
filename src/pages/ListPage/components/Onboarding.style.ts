import styled, { keyframes } from 'styled-components';

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
`;

export const Container = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
`;

const expandAnimation = keyframes`
  0% {
    transform: scale(1); /* 초기 크기 */
  }
  100% {
    transform: scale(100); /* 화면을 완전히 덮도록 확장 */
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red01};
  z-index: 1;

  transform-origin: center;
  animation: ${expandAnimation} 2s forwards;
`;
