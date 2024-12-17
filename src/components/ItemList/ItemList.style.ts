import styled, { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.05;
  }
`;

export const Container = styled.div`
  display: grid;
  width: 33.6rem;
  /* width: 100%; */
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  padding-bottom: 4.2rem;
  justify-self: center;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const FadeWrapper = styled.div<{ isFading: boolean }>`
  ${({ isFading }) =>
    isFading &&
    css`
      animation: ${fadeOut} 0.5s forwards;
    `}
`;

export const BottomDiv = styled.div`
  width: 100%;
  height: 10rem;
  background-color: transparent;
`;
