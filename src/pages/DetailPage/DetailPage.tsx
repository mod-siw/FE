import { GetPostDetail } from 'api/post';
import * as S from './DeatilPage.style';
import { UnionDetail } from 'assets/index';
import { Union } from 'assets/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [itemData, setItemData] = useState<ItemData | null>(null);

  useEffect(() => {
    const numberId = Number(id);
    GetPostDetail(numberId).then((res) => setItemData(res.data));
  }, [id]);

  const { colorMap } = useRenderFrame();
  const color = itemData?.color ? colorMap[itemData.color] : 'transparent';

  return (
    <>
      {itemData && (
        <S.Wrapper img={itemData.img}>
          <S.Container>
            <S.Title color={color}>
              2024년
              <br />
              {itemData.nickname} 님의 순간을
              <br />
              함께 한 {itemData.category}
            </S.Title>
            <S.Background>
              <UnionDetail width={535} height={535} />
            </S.Background>
            <S.InfoWrapper>
              <S.Information>{itemData.information}</S.Information>
              <S.Name>{itemData.name}</S.Name>
            </S.InfoWrapper>
            <S.CommentWrapper>
              <S.Comment color={color}>
                {itemData.nickname}'s 한줄평
                <Union width={17} height={17} fill={color} />
              </S.Comment>
              <S.Line color={color} />
              <S.Description color={color}>{itemData.description}</S.Description>
            </S.CommentWrapper>
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
};

export default DetailPage;
