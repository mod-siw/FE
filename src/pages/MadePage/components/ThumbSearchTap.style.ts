import styled from 'styled-components';

export const ControlBox = styled.div<{ isDarkMode: boolean }>`
  ${({ isDarkMode, theme }) =>
    !isDarkMode &&
    `
    border: 1px solid ${theme.colors.gray02};
    background: ${theme.colors.gray01};
  `}

  @media (max-width: 425px) {
    width: 100vw;
    margin-left: -2rem;
    padding: 0 2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  gap: 1.6rem;
  overflow-x: auto;
  padding: 1rem 0 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Circle = styled.div<{ isSelected: boolean; isDarkMode: boolean }>`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  transition: 0.3s ease;

  ${({ isSelected, isDarkMode }) =>
    isSelected &&
    (isDarkMode
      ? `
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3); 
        border: 2px solid rgba(255, 255, 255, 0.3); 
      `
      : `
        box-shadow: 0 0 0 4px rgba(166, 166, 166, 0.3); 
        border: 2px solid rgba(166, 166, 166, 0.3); 
      `)}
`;

export const FrameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 7.5rem;
  cursor: pointer;
`;
