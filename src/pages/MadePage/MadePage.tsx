import { useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const initialStep = location.state?.step || 0;

  const [step, setStep] = useState<number>(initialStep);
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

  const handleNext = (newStep?: number) => {
    const currentCondition = Object.values(conditions)[step];
    if (!currentCondition) return;

    if (newStep !== undefined) {
      //인자 안 넣었을 경우
      setStep(newStep);
    } else if (step < components.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <MadeTopbar
        step={step}
        handleNext={handleNext}
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
