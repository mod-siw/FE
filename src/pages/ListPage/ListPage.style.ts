import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  padding: 0 3rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.head_semibold}
  color: ${({ theme }) => theme.colors.mint01};

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
  margin-top: 4.4rem;
  justify-self: flex-end;

  border: 0.075rem solid #fff;
  cursor: pointer;

  span {
    ${({ theme }) => theme.fonts.button_semibold}
    color: ${({ theme }) => theme.colors.white};
  }
`;
