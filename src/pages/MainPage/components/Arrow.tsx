import { Rectangle } from 'assets';
import * as S from './Arrow.style';
import { useTheme } from 'contexts/ThemeContext';

const Arrow = () => {
  const { isDarkMode } = useTheme();
  const color = isDarkMode ? '#7B7B7B' : '#D2D2D2';
  const fillOpacity = isDarkMode ? '0.1' : '0.15';

  const rectangleClasses = ['left-bottom', 'left-top', 'right-top', 'right-bottom'];

  return (
    <S.Wrapper>
      <S.Container>
        {rectangleClasses.map((className) => (
          <Rectangle
            key={className}
            width={23}
            height={138}
            fill={color}
            fillOpacity={fillOpacity}
            className={className}
          />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};

export default Arrow;
