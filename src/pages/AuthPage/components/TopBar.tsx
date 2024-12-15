import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Back } from '../../../assets';
import { Union } from '../../../assets';

interface TopBarProps {
  buttonText: string;
  onClick?: () => void;
  isActive: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ buttonText, onClick, isActive }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Back
        width={25}
        id="back-icon"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(-1)}
      />
      <SubmitBtn isActive={isActive}>
        <Union width={12.75} fill={isActive ? '#FFFFFF' : '#333'} />
        <span onClick={onClick}>{buttonText}</span>
        <Union width={12.75} fill={isActive ? '#FFFFFF' : '#333'} />
      </SubmitBtn>
    </Wrapper>
  );
};

export default TopBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.8rem 2.25rem 2.4rem 1.9rem;
`;

const SubmitBtn = styled.div<{ isActive: boolean }>`
  display: inline-flex;
  height: 4.2rem;
  padding: 0.75rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  cursor: pointer;

  span {
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.white : theme.colors.gray02};
    ${({ theme }) => theme.fonts.body16_semibold}
  }
`;
