import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-top: 8.6rem;
  overflow-x: hidden;
  flex-shrink: 0;
  .swiper {
    height: 40rem;
  }
`;

export const BoxContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const createRollAnimation = (angle: string) => keyframes`
  0%, 12.53% {
    transform: rotate(${angle});
  }
  16.7%, 29.23% {
    transform: rotate(${parseInt(angle) + 60}deg);
  }
  33.4%, 45.93% {
    transform: rotate(${parseInt(angle) + 120}deg);
  }
  50.1%, 62.63% {
    transform: rotate(${parseInt(angle) + 180}deg);
  }
  66.8%, 79.33% {
    transform: rotate(${parseInt(angle) + 240}deg);
  }
  83.5%, 95.97% {
    transform: rotate(${parseInt(angle) + 300}deg); 
  }
  100% {
    transform: rotate(${parseInt(angle) + 360}deg); 
  }
`;

interface BoxProps {
  $top: string;
  $left: string;
  $angle: string;
  className: string;
}

export const Box = styled.div<BoxProps>`
  position: absolute;
  width: 12rem;
  height: 12rem;
  transform-origin: center;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  transform: rotate(${(props) => props.$angle});
  &.animate-roll {
    animation: ${(props) => createRollAnimation(props.$angle)} 24s infinite;
  }
`;

interface SnowProps {
  $top: string;
  $left: string;
  className: string;
}

export const Snow = styled.div<SnowProps>`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  &.animate-roll {
    animation: ${() => createRollAnimation('0deg')} 24s infinite;
  }
`;
