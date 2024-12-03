import styled, { css } from 'styled-components';

const Input = styled.input`
  display: flex;
  width: 361px;
  padding: 18px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid var(--gray_02, #333);
  background: var(--background, #0e0c0c);

  color: var(--gray03);

  /* body16_medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
`;

const Title = styled.div`
  color: var(--white);

  /* body16_semibold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
`;

export const S = {
  Input,
  Title,
};
