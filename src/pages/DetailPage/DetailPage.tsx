import { useEffect, useRef, useState } from 'react';
import * as S from './DeatilPage.style';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useRenderFrame } from 'hooks/useRenderFrame';
import { ItemData } from 'types/type';
import html2canvas from 'html2canvas';

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
import { saveAs } from 'file-saver';

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

  const divRef = useRef<HTMLDivElement>(null);
  const handleCapture = async () => {
    if (!divRef.current) return;
    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, {
        useCORS: true,
        backgroundColor: null,
        scale: 2,
      });

      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png');
        }
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  //내보내기
  // const handleCapture = () => {
  //   const target = document.getElementById('download');
  //   if (!target) {
  //     return alert('내보내기에 실패했습니다.');
  //   }
  //   html2canvas(target, {
  //     useCORS: true,
  //     backgroundColor: null,
  //     scale: 2,
  //   }).then((canvas) => {
  //     const link = document.createElement('a');
  //     document.body.appendChild(link);
  //     link.href = canvas.toDataURL('image/png');
  //     link.download = 'moy.png';
  //     link.click();
  //     document.body.removeChild(link);
  //   });
  // };

  return (
    <>
      {itemData && (
        <div ref={divRef}>
          <S.Wrapper img={itemData.img}>
            <S.Container>
              <S.UpperBtn>
                {isMine ? (
                  <>
                    <Menu width={34} height={34} onClick={handleMenu} />
                    {openMenu && (
                      <DetailMenu
                        post_id={Number(id)}
                        handleCapture={handleCapture}
                        setOpenMenu={setOpenMenu}
                      />
                    )}
                  </>
                ) : (
                  <Close width={25} height={25} onClick={handleBack} />
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
        </div>
      )}
    </>
  );
};

export default DetailPage;
