import { useState } from 'react';
import styled from 'styled-components';

import MadeTopbar from './components/MadeTopbar';
import PickTheme from './components/PickTheme';
import ThumbSearchTap from './components/ThumbSearchTap';
import UploadTitle from './components/UploadTitle';

type ConditionState = {
  pickTheme: boolean;
  thumbSearch: boolean;
  uploadTitle: boolean;
};

const MadePage = () => {
  const [step, setStep] = useState<number>(0);
  const [conditions, setConditions] = useState<ConditionState>({
    pickTheme: false,
    thumbSearch: true,
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
    }
  };

  return (
    <>
      <MadeTopbar
        step={step}
        onNext={handleNext}
        isNextEnabled={Object.values(conditions)[step]}
      />
      <Wrapper>{components[step]}</Wrapper>
    </>
  );
};

export default MadePage;

const Wrapper = styled.div`
  padding: 9.7rem 2rem 2rem;
`;
