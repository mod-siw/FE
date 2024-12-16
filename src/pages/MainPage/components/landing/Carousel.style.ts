import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6.6rem;
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

interface BoxProps {
  $top: string;
  $left: string;
  $angle: string;
}

export const Box = styled.div<BoxProps>`
  position: absolute;
  width: 12rem;
  height: 12rem;
  transform-origin: center;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  transform: rotate(${(props) => props.$angle});
  transition: transform 1s cubic-bezier(0.5, 1, 0.5, 1);
`;

interface SnowProps {
  $top: string;
  $left: string;
  $angle: string;
}

export const Snow = styled.div<SnowProps>`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  transform: rotate(${(props) => props.$angle});
  transition: transform 1s cubic-bezier(0.5, 1, 0.5, 1);
`;
