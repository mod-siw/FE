import styled from 'styled-components';

export const Wrapper = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  cursor: pointer;
  z-index: 3;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
