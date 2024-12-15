import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from 'contexts/ThemeContext';

import { Back } from '../../../assets';
import { Union } from '../../../assets';

interface TopBarProps {
  buttonText: string;
  onClick?: () => void;
  isActive: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ buttonText, onClick, isActive }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <Wrapper>
      <Back
        width={25}
        id="back-icon"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate(-1)}
      />
      <SubmitBtn isActive={isActive} isDarkMode={isDarkMode}>
        <Union
          width={12.75}
          fill={isActive ? (isDarkMode ? '#FFFFFF' : '#0E0C0C') : '#E8E8E8'}
        />
        <span onClick={onClick}>{buttonText}</span>
        <Union
          width={12.75}
          fill={isActive ? (isDarkMode ? '#FFFFFF' : '#0E0C0C') : '#E8E8E8'}
        />
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

const SubmitBtn = styled.div<{ isActive: boolean; isDarkMode: boolean }>`
  display: inline-flex;
  height: 4.2rem;
  padding: 0.75rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  cursor: pointer;

  span {
    color: ${({ theme, isActive, isDarkMode }) =>
      isActive
        ? isDarkMode
          ? theme.colors.white
          : theme.colors.textColor
        : theme.colors.gray02};
    ${({ theme }) => theme.fonts.body16_semibold}
  }
`;
