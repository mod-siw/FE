import { useItemContext } from 'contexts/ItemContext';
import * as S from './Onboarding.style';
import Item from 'components/Item/Item';

const Onboarding = () => {
  const { itemId } = useItemContext();

  const res = {
    message: '블랙 컨텐츠 상세 정보 조회 성공',
    data: {
      nickname: 'apple',
      category: '영화',
      name: '더글로리',
      information: '장재현 | 김고은, 최민식',
      description: '누구누구의 한줄평',
      is_owner: true,
      img: 'https://i.namu.wiki/i/SdJHio7UtRjLALnLn4TLhHAgY5fvfY1mkQhFBA6_6jqglUtW1BTvjIlseI_lpEw2-v3kuUkIwT6YXBYVkGlnOA.webp',
      color: 1,
      frame: 'MAN',
    },
  };
  const { img, frame, color } = res.data;

  return (
    <S.Background>
      <S.Container>
        <Item id={itemId} img={img} frame={frame} color={color} size={16} />
        <S.Box />
      </S.Container>
    </S.Background>
  );
};

export default Onboarding;
