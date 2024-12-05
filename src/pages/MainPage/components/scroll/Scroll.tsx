import * as S from './Scorll.style';
import Carousel from './Carousel';
import Arrow from '../Arrow';

const Scroll = () => {
  return (
    <S.Wrapper>
      <S.Title>
        유저들이 PICK한 <br />
        올해의 영화를 모아봤어요
      </S.Title>
      <S.ListLink>-&gt; 리스트로 보기</S.ListLink>
      <Carousel />
      <Arrow />
    </S.Wrapper>
  );
};

export default Scroll;
