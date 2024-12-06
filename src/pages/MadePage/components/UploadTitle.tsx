import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface MadeProps {
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const UploadTitle = ({ conditions, setConditions }: MadeProps) => {
  const [title, setTitle] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const isTitleValid = title.trim().length > 0 && title.trim().length <= 16;
    const isReasonValid = reason.trim().length > 0 && reason.trim().length <= 55;
    setConditions(isTitleValid && isReasonValid);
  }, [title, reason, setConditions]);

  return (
    <>
      <Title>제목을 입력해주세요</Title>
      <InputTitle
        placeholder="작품의 제목을 알려주세요 (16자 이내)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={16}
      />
      <Title>선정 이유를 입력해주세요</Title>
      <InputWhy
        placeholder="가슴을 뛰게 만든 이유가 궁금해요 (55자 이내)"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        maxLength={55}
      />
    </>
  );
};

export default UploadTitle;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  font: ${({ theme }) => theme.fonts.body16_semibold};
  margin-bottom: 1.7rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray02};

  color: ${({ theme }) => theme.colors.textColor};
  font: ${({ theme }) => theme.fonts.body16_medium};

  /* placeholder 스타일 */
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }
`;

const InputTitle = styled(Input)`
  margin-bottom: 8.6rem;
`;

const InputWhy = styled.textarea`
  width: 100%;
  padding: 1.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  resize: none;

  color: ${({ theme }) => theme.colors.textColor};
  font: ${({ theme }) => theme.fonts.body16_medium};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray03};
  }

  height: 10.2rem;
  margin-bottom: 2rem;
`;
