import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 16.3rem;
  right: 2rem;
  z-index: 5;

  @media (min-width: 576px) {
    width: fit-content;
    bottom: 16.3rem;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
  }
`;

export const FloatingBtn = styled.div`
  display: flex;
  width: 6rem;
  height: 6rem;
  padding: 1.6rem 1.9rem;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.FABColor};
  cursor: pointer;

  @media (min-width: 576px) {
    margin-left: 250%;
  }
`;
