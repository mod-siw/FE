import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2.7rem;
  margin-top: 3.3rem;

  div {
    color: #b2b2b2;
    ${({ theme }) => theme.fonts.button_semibold}
    margin-bottom: 1.9rem;
  }
`;

export const HistoryItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.1rem;

  span {
    ${({ theme }) => theme.fonts.body16_medium};
    cursor: pointer;
  }
`;
