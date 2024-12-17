import styled from 'styled-components';

export const Wrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  cursor: pointer;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
  }
`;

export const Image = styled.img`
  width: 99%;
  height: 99%;
  object-fit: cover;
  object-position: center;
`;

export const FrameWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
