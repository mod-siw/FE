import { useState, useEffect, useRef } from 'react';
import * as S from './UploadTitle.style';
import { useFormContext } from '../../../contexts/MadeFormContext';
import { useTheme } from 'contexts/ThemeContext';

interface MadeProps {
  conditions: boolean;
  setConditions: (value: boolean) => void;
}

const UploadTitle = ({ conditions, setConditions }: MadeProps) => {
  const { formData, setFormData } = useFormContext();
  const { isDarkMode } = useTheme();

  const [title, setTitle] = useState('');
  const [reason, setReason] = useState('');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      const isTitleValid = title.trim().length > 0 && title.trim().length <= 16;
      const isReasonValid = reason.trim().length > 0 && reason.trim().length <= 55;

      const isOK = isDarkMode ? isTitleValid && isReasonValid : isReasonValid;
      setConditions(isOK);
      console.log(formData);
      setFormData((prev) => ({
        ...prev,
        img: prev.img,
        name: title,
        description: reason,
      }));
    }, 300);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [title, reason]);

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
