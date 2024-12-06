import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14rem;
  height: 100vh;
`;

export const Title = styled.h1`
  padding: 0 2.1rem;
  color: ${({ theme }) => theme.colors.mint01};
  ${({ theme }) => theme.fonts.head_semibold}
`;

export const ListLink = styled.a`
  padding: 0 2.1rem;
  margin-top: 2.5rem;
  color: ${({ theme }) => theme.colors.mint01};
  ${({ theme }) => theme.fonts.link_semibold}
  cursor: pointer;
`;
