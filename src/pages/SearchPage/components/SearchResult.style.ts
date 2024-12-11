import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3.3rem;

  div {
    color: #b2b2b2;
    ${({ theme }) => theme.fonts.button_semibold}
    margin-bottom: 1.6rem;
  }
`;
