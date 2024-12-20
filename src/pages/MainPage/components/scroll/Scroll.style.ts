import styled, { DefaultTheme } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8.7rem;
  height: 100vh;
  min-height: 100vh;
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1<{ color: keyof DefaultTheme['colors'] }>`
  margin: 0 2.1rem;
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.mint01};
  ${({ theme }) => theme.fonts.head_semibold}
`;

export const ListLink = styled.div<{ color: keyof DefaultTheme['colors'] }>`
  margin: 2.1rem auto 0 2.5rem;
  width: fit-content;
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.mint01};
  ${({ theme }) => theme.fonts.link_semibold}
  cursor: pointer;
`;
