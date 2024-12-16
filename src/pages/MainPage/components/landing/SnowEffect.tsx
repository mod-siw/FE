import React from 'react';
import * as S from './Carousel.style';
import { useTheme } from 'styled-components';
import { MiniSymbol2 } from 'assets';
import { snowData } from 'constants/main/mainSlide';

interface SnowEffectProps {
  slideIndex: number;
  $angle: string;
}

const SnowEffect = ({ slideIndex, $angle }: SnowEffectProps) => {
  const theme = useTheme();

  return (
    <>
      {snowData[slideIndex]?.map((snow) => (
        <S.Snow key={snow.id} $top={snow.top} $left={snow.left} $angle={$angle}>
          <MiniSymbol2 fill={theme.colors.textColor} />
        </S.Snow>
      ))}
    </>
  );
};

export default React.memo(SnowEffect);
