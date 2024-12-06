import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 3rem;
`;

export const Title = styled.div<{
  $titleColor: keyof typeof import('styles/theme').darkTheme.colors;
}>`
  ${({ theme }) => theme.fonts.head_semibold}
  color: ${({ theme, $titleColor }) => theme.colors[$titleColor]};

  margin-top: 4.2rem;
`;

export const CreateBtn = styled.div`
  width: 16rem;
  height: 4.2rem;
  padding: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 4.4rem 0 4.2rem 0;
  justify-self: flex-end;

  border: 0.075rem solid #fff;
  cursor: pointer;

  span {
    ${({ theme }) => theme.fonts.button_semibold}
    color: ${({ theme }) => theme.colors.white};
  }
`;
