import { useState } from 'react';
import styled from 'styled-components';

import MadeTopbar from './components/MadeTopbar';
import PickTheme from './components/PickTheme';
import ThumbSearchTap from './components/ThumbSearchTap';
import UploadTitle from './components/UploadTitle';
import { FormProvider } from './MadeFormContext';

type ConditionState = {
  pickTheme: boolean;
  thumbSearch: boolean;
  uploadTitle: boolean;
};

const MadePage = () => {
  const [step, setStep] = useState<number>(0);
  const [conditions, setConditions] = useState<ConditionState>({
    pickTheme: false,
    thumbSearch: false,
    uploadTitle: false,
  });

  const components = [
    <PickTheme
      key="pickTheme"
      conditions={conditions.pickTheme}
      setConditions={(value: boolean) =>
        setConditions((prev) => ({ ...prev, pickTheme: value }))
      }
    />,
    <ThumbSearchTap
      key="thumbSearch"
      conditions={conditions.thumbSearch}
      setConditions={(value) =>
        setConditions((prev) => ({ ...prev, thumbSearch: value }))
      }
    />,
    <UploadTitle
      key="uploadTitle"
      conditions={conditions.uploadTitle}
      setConditions={(value) =>
        setConditions((prev) => ({ ...prev, uploadTitle: value }))
      }
    />,
  ];

  const handleNext = () => {
    const currentCondition = Object.values(conditions)[step];
    if (!currentCondition) return;

    if (step < components.length - 1) {
      setStep(step + 1);
    } else {
      // 모든 스텝 완료 시 formData를 가져와 API 전송 가능
      // formData 접근은 useFormContext()를 사용하는 마지막 단계 로직에서 가능
    }
  };

  return (
    <FormProvider>
      <MadeTopbar
        step={step}
        onNext={handleNext}
        isNextEnabled={Object.values(conditions)[step]}
      />
      <Wrapper>{components[step]}</Wrapper>
    </FormProvider>
  );
};

export default MadePage;

const Wrapper = styled.div`
  padding: 9.7rem 2rem 2rem;
`;
