import * as S from './Scorll.style';
import Carousel from './Carousel';
import Arrow from '../Arrow';
import { pathToCategory } from 'constants/category';

interface ScrollProps {
  category: {
    category: string;
    title: string[];
    data: { id: number; name: string; img: string }[];
  };
}

const Scroll = ({ category }: ScrollProps) => {
  const categoryColor = pathToCategory[category.category || 'movie'].color;

  return (
    <S.Wrapper>
      <S.Title color={categoryColor}>
        {category.title[0]} <br />
        {category.title[1]}
      </S.Title>
      <S.ListLink color={categoryColor}>-&gt; 리스트로 보기</S.ListLink>
      <Carousel data={category.data} />
      <Arrow />
    </S.Wrapper>
  );
};

export default Scroll;
