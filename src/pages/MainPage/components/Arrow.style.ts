import styled, { keyframes } from 'styled-components';

const createRotateArrow = (start: string, end: string, margin = '0') => keyframes`
  0% {
    height: 13.8rem;
    transform: rotate(${start});
    margin: 0;
  }
  30% {
    height: 13.8rem;
    transform: rotate(${start});
    margin: 0;
  }
  50% {
    height: ${margin !== '0' ? '8.2rem' : '13.8rem'};
    transform: rotate(${end});
    margin: ${margin};
  }
  80% {
    height: ${margin !== '0' ? '8.2rem' : '13.8rem'};
    transform: rotate(${end});
    margin: ${margin};
  }
  100% {
    height: 13.8rem;
    transform: rotate(${start});
    margin: 0;
  }
`;

const rotateArrow1 = createRotateArrow('-67.5deg', '-40deg', '8rem 5rem 0 0');
const rotateArrow2 = createRotateArrow('-22.5deg', '0deg');
const rotateArrow3 = createRotateArrow('22.5deg', '0deg');
const rotateArrow4 = createRotateArrow('67.5deg', '40deg', '8rem 0 0 5rem');

export const Container = styled.div`
  margin-top: auto;
  margin-bottom: 20rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  svg {
    position: absolute;
  }

  .left-bottom {
    animation: ${rotateArrow1} 2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  .left-top {
    animation: ${rotateArrow2} 2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  .right-top {
    animation: ${rotateArrow3} 2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  .right-bottom {
    animation: ${rotateArrow4} 2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }
`;
