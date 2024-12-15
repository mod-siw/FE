import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Delete, MiniSymbol } from 'assets';
import { darkTheme } from 'styles/theme';

import { useFormContext } from '../MadeFormContext';
import { PostMadeData } from 'api/made';

interface MadeTopbarProps {
  step: number;
  onNext: () => void;
  isNextEnabled: boolean;
}

const MadeTopbar = ({ step, onNext, isNextEnabled }: MadeTopbarProps) => {
  const navigate = useNavigate();
  const { formData } = useFormContext();

  const handlePost = async () => {
    await PostMadeData(formData);
  };

  const handleClick = () => {
    if (isNextEnabled) {
      if (step === 2) {
        handlePost();
        navigate('/my');
      } else {
        onNext();
      }
    }
  };

  return (
    <Wrapper>
      <Delete width={25} onClick={() => navigate('/my')} />
      <NextDiv onClick={handleClick} isDisabled={!isNextEnabled}>
        <MiniSymbol
          width={12.75}
          color={!isNextEnabled ? darkTheme.colors.gray02 : darkTheme.colors.textColor}
        />
        <p>{step === 2 ? '저장' : '다음'}</p>
        <MiniSymbol
          width={12.75}
          color={!isNextEnabled ? darkTheme.colors.gray02 : darkTheme.colors.textColor}
        />
      </NextDiv>
    </Wrapper>
  );
};

export default MadeTopbar;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3.8rem 2rem 2.2rem;

  @media (min-width: 576px) {
    width: 390px;
  }
`;

const NextDiv = styled.div<{ isDisabled: boolean }>`
  display: flex;
  padding: 7.5px 0px;
  justify-content: center;
  align-items: center;
  gap: 7.5px;
  flex-shrink: 0;
  opacity: ${({ isDisabled }) => (isDisabled ? 1 : 1)};
  cursor: pointer;
  p {
    font: ${({ theme }) => theme.fonts.body16_semibold};
    color: ${({ isDisabled, theme }) =>
      isDisabled ? theme.colors.gray02 : theme.colors.textColor};
  }
`;
