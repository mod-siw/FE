import * as S from './DeatilPage.style';
import { UnionDetail } from 'assets/index';
import { Union } from 'assets/index';

const DetailPage = () => {
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

  return (
    <S.Wrapper img={res.data.img}>
      <S.Container>
        <S.Title>
          2024년
          <br />
          {res.data.nickname} 님의 순간을
          <br />
          함께 한 {res.data.category}
        </S.Title>
        <S.Background>
          <UnionDetail width={535} height={535} />
        </S.Background>
        <S.InfoWrapper>
          <S.Information>{res.data.information}</S.Information>
          <S.Name>{res.data.name}</S.Name>
        </S.InfoWrapper>
        <S.CommentWrapper>
          <S.Comment>
            {res.data.nickname}'s 한줄평
            <Union width={17} height={17} fill="#00F184" />
          </S.Comment>
          <S.Line />
          <S.Description>{res.data.description}</S.Description>
        </S.CommentWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default DetailPage;
