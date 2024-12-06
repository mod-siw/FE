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

export const UploBtn = styled.button`
  position: absolute;
  z-index: 15;
  display: inline-flex;
  padding: 1.4rem 2rem;
  justify-content: center;
  align-items: center;

  border-radius: 5rem;
  background: rgba(255, 255, 255, 0.2);

  color: ${({ theme }) => theme.colors.textColor};
  font: ${({ theme }) => theme.fonts.button_semibold};
`;
