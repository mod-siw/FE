import React from 'react';
import styled from 'styled-components';
import { Back } from '../../../assets';
import { Union } from '../../../assets';

interface TopBarProps {
  buttonText: string;
}

const TopBar: React.FC<TopBarProps> = ({ buttonText }) => {
  return (
    <Wrapper>
      <Back width={25} />
      <BtnContainer>
        <Union width={12.75} />
        <SubmitBtn>{buttonText}</SubmitBtn>
        <Union width={12.75} />
      </BtnContainer>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const SubmitBtn = styled.div`
  display: inline-flex;
  height: 42px;
  padding: 7.5px 0px;
  justify-content: center;
  align-items: center;
  gap: 7.5px;
  flex-shrink: 0;

  color: var(--white);

  /* body16_semibold */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
`;
