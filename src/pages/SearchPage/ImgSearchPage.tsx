import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import * as S from './ImgSearchPage.style';
import { Back } from 'assets/index';
import { ImgMock } from './components/ImgMock';
import ImgItem from './components/ImgItem';

const ImgSearchPage = () => {
  const [query, setQuery] = useState(''); // 검색어
  const data = ImgMock.data;
  const isNone = false; // 임시

  const handleClick = (id: number) => {
    console.log(id);
  };

  return (
    <>
      <S.FixedDiv>
        <S.TopbarDiv>
          <Back width={25} />
          <S.TopbarTitle>이미지 검색</S.TopbarTitle>
          <span style={{ width: 25 }}></span>
        </S.TopbarDiv>
        <SearchBar isBack={false} query={query} setQuery={setQuery} />
      </S.FixedDiv>
      <S.Wrapper>
        {isNone ? (
          <S.Msg>검색된 이미지가 없어요.</S.Msg>
        ) : (
          <S.Container>
            {data.map((item) => (
              <React.Fragment key={item.id}>
                <ImgItem
                  id={item.id}
                  img={item.img}
                  onClick={() => handleClick(item.id)}
                />
              </React.Fragment>
            ))}
          </S.Container>
        )}
      </S.Wrapper>
    </>
  );
};

export default ImgSearchPage;
