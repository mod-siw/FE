import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8.7rem;
  height: 100vh;
`;

export const Title = styled.h1`
  padding: 0 2.1rem;
  ${({ theme }) => theme.fonts.head_semibold}
`;
