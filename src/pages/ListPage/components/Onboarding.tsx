import { useItemContext } from 'contexts/ItemContext';
import * as S from './Onboarding.style';
import Item from 'components/Item/Item';
import { useEffect, useState } from 'react';
import { GetPostDetail } from 'api/post';
import { useRenderFrame } from 'hooks/useRenderFrame';

interface ItemData {
  nickname: string;
  category: string;
  name: string;
  information: string;
  description: string;
  is_owner: boolean;
  img: string;
  color: number;
  frame: string;
}

const Onboarding = () => {
  const { itemId } = useItemContext();
  const [animationStart, setAnimationStart] = useState(false);

  const [itemData, setItemData] = useState<ItemData>();
  const [itemImg, setItemImg] = useState<string>('');

  const { colorMap } = useRenderFrame();

  useEffect(() => {
    GetPostDetail(itemId).then((res) => setItemData(res.data));
  }, []);

  const boxColor = itemData?.color ? colorMap[itemData.color] : 'transparent';

  // 가운데 이미지 검정으로 변하는 처리
  useEffect(() => {
    const img = itemData?.img || '';
    setItemImg(img);

    const timer = setTimeout(() => {
      setItemImg(
        //검정색
        'https://cafe24.poxo.com/ec01/isjm01/1A66J+oWTqAze9jtV45BSnUy6sLYarZlZVaIv2IR+OXbKUJU/yjrdIqeQVsgSq/TPAqgTmUf6IUaF2SAEgkhVg==/_/web/product/big/202408/62215000a72ff9c85d3dfe6cf494f150.jpg',
      );
    }, 1500);
    return () => clearTimeout(timer);
  }, [itemData?.img]);

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
        {itemData && (
          <Item
            id={itemId}
            img={itemImg}
            frame={itemData?.frame}
            color={itemData?.color}
            size={16}
          />
        )}
        <S.Box animationStart={animationStart} color={boxColor} />
      </S.Container>
    </S.Background>
  );
};

export default Onboarding;
