import React from 'react';
import styled from 'styled-components';

const MyPage = () => {
  return (
    <>
      <Text>2024년 채린님의 가슴을 뛰게 만든</Text>
      <BoxWrapper></BoxWrapper>
    </>
  );
};

export default MyPage;

const Text = styled.div`
  color: var(--white);

  /* head_medium */
  font-family: Pretendard;
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const BoxWrapper = styled.div`
  width: 402px;
  height: 402px;
  flex-shrink: 0;

  background: var(--gray01);
`;
