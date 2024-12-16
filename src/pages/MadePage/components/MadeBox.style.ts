import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1.4rem 2rem;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.div<{ thumbnailUrl: string }>`
  position: absolute;
  width: 359px;
  height: 359px;
  background-image: url(${({ thumbnailUrl }) => thumbnailUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const SymbolWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

export const UploBtn = styled.button<{ isDarkMode: boolean }>`
  position: absolute;
  z-index: 15;
  display: inline-flex;
  padding: 1.4rem 2rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: 5rem;
  background: ${({ isDarkMode }) =>
    isDarkMode ? 'rgba(255, 255, 255, 0.20)' : 'rgba(128, 128, 128, 0.1)'};

  color: ${({ isDarkMode, theme }) => (isDarkMode ? '#fff' : theme.colors.gray03)};
  font: ${({ theme }) => theme.fonts.button_semibold};
`;
