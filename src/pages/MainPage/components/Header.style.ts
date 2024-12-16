import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2.1rem;
  z-index: 5;

  @media (min-width: 425px) {
    width: 390px;
  }

  span {
    margin: 0 2rem;
    font-size: 18.525px;
    font-weight: 300;
    line-height: normal;
    text-align: center;
    cursor: pointer;
  }
`;

export const ToggleBtn = styled.button<{ isDarkMode: boolean }>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.9rem;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  background: ${({ theme }) => theme.colors.bgColor};
  cursor: pointer;

  p {
    margin-right: ${({ isDarkMode }) => (isDarkMode ? '0.7rem' : '0')};
    margin-left: ${({ isDarkMode }) => (isDarkMode ? '0' : '0.7rem')};

    color: ${({ theme }) => theme.colors.textColor};
    ${({ theme }) => theme.fonts.button_semibold}
  }
`;

export const Line = styled.div`
  margin: 0 0.8rem;
  width: 0.1rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.colors.gray02};
`;
