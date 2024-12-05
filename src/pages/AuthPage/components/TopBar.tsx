import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Back } from '../../../assets';
import { Union } from '../../../assets';

interface TopBarProps {
  buttonText: string;
  onClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ buttonText, onClick }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Back width={25} id="back-icon" onClick={() => navigate(-1)} />
      <SubmitBtn>
        <Union width={12.75} />
        <span onClick={onClick}>{buttonText}</span>
        <Union width={12.75} />
      </SubmitBtn>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.8rem 2.25rem 2.4rem 1.9rem;

  #back-icon {
    cursor: pointer;
  }
`;

const SubmitBtn = styled.div`
  display: inline-flex;
  height: 4.2rem;
  padding: 0.75rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.white};

    /* body16_semibold */
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.2rem; /* 137.5% */
  }
`;
