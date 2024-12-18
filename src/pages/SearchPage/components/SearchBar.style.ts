import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3rem;
`;

export const InputContainer = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.9rem 1.6rem;
  background: ${({ theme }) => theme.colors.gray02};
  border-radius: 6rem;
  gap: 1rem;

  input {
    width: 100%;
    ${({ theme }) => theme.fonts.body16_semibold}
    //color: ${({ theme }) => theme.colors.white};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};

    &::placeholder {
      ${({ theme }) => theme.fonts.body16_medium}
      color: ${({ theme }) => theme.colors.gray03};
    }
  }
`;
