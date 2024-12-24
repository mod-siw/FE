import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import { Delete, MiniSymbol } from 'assets';
import { darkTheme, lightTheme } from 'styles/theme';
import { useTheme } from 'contexts/ThemeContext';

import { useFormContext, FormDataType } from '../../../contexts/MadeFormContext';
import { PostMadeData, PostWhiteData } from 'api/made';

interface MadeTopbarProps {
  step: number;
  onNext: () => void;
  isNextEnabled: boolean;
}

const MadeTopbar = ({ step, onNext, isNextEnabled }: MadeTopbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, setFormData } = useFormContext();
  const { isDarkMode } = useTheme();

  const initialFormData: FormDataType = {
    category: '',
    name: '',
    description: '',
    information: '',
    color: 1,
    frame: 'SNOW',
    img: null,
  };

  const resetFormData = () => setFormData(initialFormData);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handlePost = async () => {
    if (isDarkMode) {
      await PostMadeData(formData);
    } else {
      await PostWhiteData(formData);
    }
    resetFormData();
  };

  const handleDelete = () => {
    resetFormData();
    const prevPath = location.state?.prev || '/my';
    navigate(prevPath, { state: { isGridVisible: true } });
  };

  const handleClick = async () => {
    if (isNextEnabled) {
      if (step === 2) {
        await handlePost();
        navigate('/my', { state: { isGridVisible: true } });
      } else {
        onNext();
      }
    }
  };

  return (
    <Wrapper>
      <Delete
        width={25}
        onClick={handleDelete}
        stroke={isDarkMode ? '#FFFFFF' : '#0E0C0C'}
      />

      <NextDiv onClick={handleClick} isDisabled={!isNextEnabled}>
        <MiniSymbol
          width={12.75}
          color={!isNextEnabled ? theme.colors.gray02 : theme.colors.textColor}
        />
        <p>{step === 2 ? '저장' : '다음'}</p>
        <MiniSymbol
          width={12.75}
          color={!isNextEnabled ? theme.colors.gray02 : theme.colors.textColor}
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

  z-index: 5000;
  background-color: ${({ theme }) => theme.colors.bgColor};

  @media (min-width: 425px) {
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
  cursor: pointer;
  p {
    font: ${({ theme }) => theme.fonts.body16_semibold};
    color: ${({ isDisabled, theme }) =>
      isDisabled ? theme.colors.gray02 : theme.colors.textColor};
  }
`;
