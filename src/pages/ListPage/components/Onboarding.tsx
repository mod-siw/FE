import { useItemContext } from 'contexts/ItemContext';
import * as S from './Onboarding.style';
import Item from 'components/Item/Item';
import { useEffect, useState } from 'react';

const Onboarding = () => {
  const { itemId } = useItemContext();
  const [animationStart, setAnimationStart] = useState(false);
  const [itemImg, setItemImg] = useState<string>('');

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
      color: 5,
      frame: 'SNOW',
    },
  };
  const { img, frame, color } = res.data;

  // 가운데 이미지 검정으로 변하는 처리
  useEffect(() => {
    setItemImg(img);

    const timer = setTimeout(() => {
      setItemImg(
        'https://cafe24.poxo.com/ec01/isjm01/1A66J+oWTqAze9jtV45BSnUy6sLYarZlZVaIv2IR+OXbKUJU/yjrdIqeQVsgSq/TPAqgTmUf6IUaF2SAEgkhVg==/_/web/product/big/202408/62215000a72ff9c85d3dfe6cf494f150.jpg',
      );
    }, 1500);
    return () => clearTimeout(timer);
  }, [img]);

  // 확장 애니메이션 전 1.5초 지연
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStart(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Background>
      <S.Container>
        <Item id={itemId} img={itemImg} frame={frame} color={color} size={16} />
        <S.Box animationStart={animationStart} />
      </S.Container>
    </S.Background>
  );
};

export default Onboarding;
