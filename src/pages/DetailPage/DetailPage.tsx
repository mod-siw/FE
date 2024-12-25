import { useEffect, useRef, useState } from 'react';
import * as S from './DeatilPage.style';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useRenderFrame } from 'hooks/useRenderFrame';
import { ItemData } from 'types/type';
import html2canvas from 'html2canvas';

// components
import {
  Detail2024,
  DetailHat,
  DetailMan,
  DetailStar,
  DetailTree,
  DetailUnion,
} from 'assets/index';
import { Union } from 'assets/index';
import { Close } from 'assets/index';
import { Menu } from 'assets/index';
import DetailMenu from './components/DetailMenu';

// data
import { GetPostDetail } from 'api/post';
import { useTheme } from 'contexts/ThemeContext';
import { saveAs } from 'file-saver';
import { getCookie } from 'api/http';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isDarkMode } = useTheme();
  const [itemData, setItemData] = useState<ItemData | null>(null);

  // 데이터 받아오기
  useEffect(() => {
    const numberId = Number(id);
    GetPostDetail(isDarkMode, numberId).then((res) => setItemData(res.data));
  }, [id]);

  const { colorMap } = useRenderFrame();
  const color = itemData?.color ? colorMap[itemData.color] : 'transparent';

  // 이전 경로 판단
  const navigate = useNavigate();
  const location = useLocation();
  const fromMy = location.state?.fromMyPage;

  const isMine = getCookie('access_token') && fromMy;
  const [openMenu, setOpenMenu] = useState(false);

  // 닫기 버튼 클릭 함수
  const handleBack = () => {
    const prevPath = location.state?.prev || -1;
    navigate(prevPath, { state: { prev: `/detail/${id}`, isGridVisible: true } });
  };

  // 미트볼 버튼 클릭 함수
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  // 미트볼 - 내보내기 클릭 함수
  const divRef = useRef<HTMLDivElement>(null);
  const handleCapture = async () => {
    if (!divRef.current) return;
    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, {
        allowTaint: true,
        useCORS: true,
        backgroundColor: null,
        scale: 2,
      });

      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'moy.png');
        }
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  // 배경 이미지 추출
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      if (!itemData?.img) return;

      const img = new Image();
      img.crossOrigin = 'anonymous'; // CORS 설정
      img.src = `${itemData.img}?timestamp=${Date.now()}`;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          setImageDataUrl(canvas.toDataURL());
        }
      };

      img.onerror = (error) => console.error('이미지 로드 실패:', error);
    };

    loadImage();
  }, [itemData?.img]);

  // 배경 투명 프레임
  const renderDetailFrame = (frame: string | undefined) => {
    switch (frame) {
      case 'TREE':
        return <DetailTree width={535} height={535} />;
      case 'SNOW':
        return <DetailUnion width={535} height={535} />;
      case 'HAT':
        return <DetailHat width={535} height={535} />;
      case 'YEAR':
        return <Detail2024 width={535} height={535} />;
      case 'MAN':
        return <DetailMan width={535} height={535} />;
      case 'STAR':
        return <DetailStar width={535} height={535} />;
      default:
        return null;
    }
  };

  return (
    <>
      {itemData && (
        <S.Entire ref={divRef}>
          <S.Wrapper
            style={{ backgroundImage: imageDataUrl ? `url(${imageDataUrl})` : 'none' }}
          >
            <S.ShadowLayer className="background-layer" />
          </S.Wrapper>
          <S.Container className="content-layer">
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
              {itemData.nickname}님의 순간을
              <br />
              함께 한 {itemData.category}
            </S.Title>
            <S.Background>
              <S.CenterContainer>
                {renderDetailFrame(itemData.frame)}
                <S.InfoWrapper>
                  <S.Information>{itemData.information}</S.Information>
                  <S.Name>{itemData.name}</S.Name>
                </S.InfoWrapper>
              </S.CenterContainer>
            </S.Background>
            <S.CommentWrapper>
              <S.Comment color={color}>
                {itemData.nickname}'s 한줄평
                <Union width={17} height={17} fill={color} />
              </S.Comment>
              <S.Line color={color} />
              <S.Description color={color}>{itemData.description}</S.Description>
            </S.CommentWrapper>
          </S.Container>
        </S.Entire>
      )}
    </>
  );
};

export default DetailPage;
