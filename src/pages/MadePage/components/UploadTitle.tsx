import { useState, useEffect } from 'react';
import * as S from './UploadTitle.style';

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
      <S.Title>제목을 입력해주세요</S.Title>
      <S.InputTitle
        placeholder="작품의 제목을 알려주세요 (16자 이내)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={16}
      />
      <S.Title>선정 이유를 입력해주세요</S.Title>
      <S.InputWhy
        placeholder="가슴을 뛰게 만든 이유가 궁금해요 (55자 이내)"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        maxLength={55}
      />
    </>
  );
};

export default UploadTitle;
