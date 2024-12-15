import styled from 'styled-components';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font: ${({ theme }) => theme.fonts.body16_semibold};
  margin-bottom: 1.7rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray02};

  color: ${({ theme }) => theme.colors.textColor};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }
`;

export const InputTitle = styled(Input)`
  margin-bottom: 8.6rem;
`;

export const InputWhy = styled.textarea`
  width: 100%;
  padding: 1.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  resize: none;

  color: ${({ theme }) => theme.colors.textColor};

  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }

  height: 10.2rem;
  margin-bottom: 2rem;
`;
