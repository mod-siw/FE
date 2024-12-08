import * as S from './Landing.style';
import Carousel from './Carousel';
import Arrow from '../Arrow';

const Landing = () => {
  return (
    <S.Wrapper>
      <S.Title>
        올해의 기억을 담은 <br />
        채린님의 컬쳐 박스
      </S.Title>
      <Carousel />
      <Arrow />
    </S.Wrapper>
  );
};

export default Landing;
