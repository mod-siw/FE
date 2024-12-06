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
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  margin-bottom: 9.8rem;
  justify-self: center;
`;

export const FadeWrapper = styled.div<{ isFading: boolean }>`
  ${({ isFading }) =>
    isFading &&
    css`
      animation: ${fadeOut} 0.5s forwards;
    `}
`;
