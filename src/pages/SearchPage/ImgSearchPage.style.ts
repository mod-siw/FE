import styled from 'styled-components';

export const FixedDiv = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem 1.8rem 2rem;

  @media (min-width: 576px) {
    width: 390px;
  }
`;

export const TopbarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4.9rem 0 2.5rem 0;
`;

export const TopbarTitle = styled.div`
  ${({ theme }) => theme.fonts.body16_semibold}
`;

export const Wrapper = styled.div`
  padding: 19.3rem 2rem 0 2rem;
  display: flex;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
`;

export const Msg = styled.div`
  ${({ theme }) => theme.fonts.body16_medium}
  color: ${({ theme }) => theme.colors.gray03};
  margin-top: 18rem;
`;

export const Container = styled.div`
  display: grid;
  width: 33.6rem;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  margin-bottom: 9.8rem;
  justify-self: center;
`;
