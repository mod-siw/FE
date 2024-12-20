import { useEffect, useState } from 'react';
import * as S from './Onboarding.style';
import { useRenderFrame } from 'hooks/useRenderFrame';
import { ItemData } from 'types/type';

// components
import Item from 'components/Item/Item';

// data
import { GetPostDetail } from 'api/post';
import { useItemContext } from 'contexts/ItemContext';
import { useTheme } from 'contexts/ThemeContext';

const Onboarding = () => {
  const { colorMap } = useRenderFrame();
  const { itemId } = useItemContext();
  const { isDarkMode } = useTheme();

  const [animationStart, setAnimationStart] = useState(false);

  const [itemData, setItemData] = useState<ItemData>();
  const [itemImg, setItemImg] = useState<string>('');

  useEffect(() => {
    GetPostDetail(isDarkMode, itemId).then((res) => setItemData(res.data));
  }, []);

  const boxColor = itemData?.color ? colorMap[itemData.color] : 'transparent';

  // 가운데 이미지 검정으로 변하는 처리
  useEffect(() => {
    const img = itemData?.img || '';
    setItemImg(img);

    const timer = setTimeout(() => {
      setItemImg(
        isDarkMode
          ? 'https://cafe24.poxo.com/ec01/isjm01/1A66J+oWTqAze9jtV45BSnUy6sLYarZlZVaIv2IR+OXbKUJU/yjrdIqeQVsgSq/TPAqgTmUf6IUaF2SAEgkhVg==/_/web/product/big/202408/62215000a72ff9c85d3dfe6cf494f150.jpg'
          : 'https://www.shutterstock.com/image-illustration/white-background-full-hd-image-260nw-2225809323.jpg',
      );
    }, 800);
    return () => clearTimeout(timer);
  }, [itemData?.img]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStart(true);
    }, 800); // 확장 애니메이션 전 0.8초 지연

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
