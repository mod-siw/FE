import styled from 'styled-components';
import { useTheme } from 'contexts/ThemeContext';
import { Union } from 'assets/index';

interface PopupProps {
  onClose: () => void;
  handleNext: (newStep?: number) => void;
}

const MadePopup: React.FC<PopupProps> = ({ onClose, handleNext }) => {
  const { isDarkMode } = useTheme();

  const handleClose = () => {
    handleNext(1);
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <Wrapper>
        <Text>
          <Union width={12.75} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
          <span>{'업로드 가능한 용량을 초과했어요.\n다시 시도해주세요.'}</span>
          <Union width={12.75} fill={isDarkMode ? '#FFFFFF' : '#0E0C0C'} />
        </Text>
        <Line />
        <CloseBtn onClick={handleClose}>닫기</CloseBtn>
      </Wrapper>
    </>
  );
};

export default MadePopup;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 550;
`;

const Wrapper = styled.div`
  padding-top: 3.7rem;
  padding-bottom: 2.2rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29.1rem;
  height: 16.2rem;

  border: 1px solid ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.bgColor};

  z-index: 600;
`;

const Text = styled.div`
  margin-bottom: 2.9rem;

  display: inline-flex;
  height: 4.2rem;
  padding: 0.75rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;

  span {
    text-align: center;
    white-space: pre-wrap;
    color: ${({ theme }) => theme.colors.textColor};
    ${({ theme }) => theme.fonts.body14_medium}
    line-height: 2rem;
  }
`;
const Line = styled.div`
  margin-bottom: 1rem;
  width: 25.865rem;
  height: 0.1rem;
  flex-shrink: 0;
  stroke-width: 0.1rem;
  background: ${({ theme }) => theme.colors.gray03};
`;

const CloseBtn = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  ${({ theme }) => theme.fonts.body16_medium}

  cursor: pointer;
`;
