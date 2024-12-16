import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
`;

export const CreateBtn = styled.div<{ isDarkMode: boolean }>`
  width: 16rem;
  height: 4.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 4.4rem 0 4.2rem 0;
  align-self: flex-end;

  border: 0.075rem solid ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  cursor: pointer;

  span {
    ${({ theme }) => theme.fonts.button_semibold}
    color: ${({ isDarkMode }) => (isDarkMode ? '#ffffff' : '#000000')};
  }
`;

export const Title = styled.div<{
  $titleColor: keyof typeof import('styles/theme').darkTheme.colors;
}>`
  ${({ theme }) => theme.fonts.head_semibold}
  color: ${({ theme, $titleColor }) => theme.colors[$titleColor]};

  margin-top: 4.2rem;
`;
