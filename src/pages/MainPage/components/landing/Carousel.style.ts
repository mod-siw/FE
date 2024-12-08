import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-top: 8.6rem;
  overflow-x: hidden;
  flex-shrink: 0;
  z-index: 1;
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
  0% {
    transform: rotate(${angle});
  }
  16.66% {
    transform: rotate(${parseInt(angle) - 180}deg);
  }
  50% {
    transform: rotate(${parseInt(angle) - 180}deg);
  }
  66.66% {
    transform: rotate(${parseInt(angle) - 360}deg);
  }
  100% {
    transform: rotate(${parseInt(angle) - 360}deg);
  }
`;

interface BoxProps {
  top: string;
  left: string;
  angle: string;
  className: string;
}

export const Box = styled.div<BoxProps>`
  position: absolute;
  width: 12rem;
  height: 12rem;
  transform-origin: center;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.angle});
  &.animate-roll {
    animation: ${(props) => createRollAnimation(props.angle)} 6s infinite;
  }
`;

const moveSnow = (props: SnowProps) => keyframes`
  0% {
    top: ${props.top};
    left: ${props.left};
  }
  16.66% {
    top: calc(${props.top} - 0.5rem);
    left: calc(${props.left} - 0.5rem);
  }
  50% {
    top: calc(${props.top} - 0.5rem);
    left: calc(${props.left} - 0.5rem);
  }
  66.66% {
    top: ${props.top};
    left: ${props.left};
  }
  100% {
    top: ${props.top};
    left: ${props.left};
  }
`;

interface SnowProps {
  top: string;
  left: string;
  className: string;
}

export const Snow = styled.div<SnowProps>`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  &.animate-roll {
    animation: ${() => createRollAnimation('0deg')} 6s infinite;
  }
`;
