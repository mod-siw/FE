import { useEffect, useState } from 'react';
import * as S from './DeatilPage.style';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useRenderFrame } from 'hooks/useRenderFrame';
import { ItemData } from 'types/type';

// components
import { UnionDetail } from 'assets/index';
import { Union } from 'assets/index';
import { Close } from 'assets/index';
import { Menu } from 'assets/index';
import DetailMenu from './components/DetailMenu';

// data
import { GetPostDetail } from 'api/post';
import { useTheme } from 'contexts/ThemeContext';
import { getLocalStorageItem } from 'contexts/UserContext';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [itemData, setItemData] = useState<ItemData | null>(null);
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();
  const fromMy = location.state?.from === 'my';
  const localNickname = getLocalStorageItem('nickname');

  useEffect(() => {
    const numberId = Number(id);
    GetPostDetail(isDarkMode, numberId).then((res) => setItemData(res.data));
  }, [id]);

  const { colorMap } = useRenderFrame();
  const color = itemData?.color ? colorMap[itemData.color] : 'transparent';
  const isMine = itemData?.nickname === localNickname && fromMy;
  const [openMenu, setOpenMenu] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {itemData && (
        <S.Wrapper img={itemData.img}>
          <S.Container>
            <S.UpperBtn>
              {isMine ? (
                <>
                  <Menu
                    width={34}
                    height={34}
                    onClick={handleMenu}
                    style={{ cursor: 'pointer' }}
                  />
                  {openMenu && <DetailMenu post_id={Number(id)} />}
                </>
              ) : (
                <Close
                  width={25}
                  height={25}
                  onClick={handleBack}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </S.UpperBtn>
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
