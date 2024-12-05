import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 2.5rem;
  right: 2rem;
  z-index: 5;

  @media (min-width: 576px) {
    width: fit-content;
    bottom: 2.5rem;
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
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;

  @media (min-width: 576px) {
    margin-left: 250%;
  }
`;
