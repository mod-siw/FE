import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Delete, MiniSymbol } from '../../../assets';

const MadeTopbar = () => {
  return (
    <Wrapper>
      <Delete width={25} />
      <NextDiv>
        <p>* 다음 *</p>
      </NextDiv>
    </Wrapper>
  );
};

export default MadeTopbar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 3.8rem 2rem 2.2rem;
`;

const NextDiv = styled.div`
  cursor: pointer;
  p {
    font: ${({ theme }) => theme.fonts.body16_semibold};
  }
`;
