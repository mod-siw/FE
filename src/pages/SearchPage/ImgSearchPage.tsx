import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './ImgSearchPage.style';
import { useFormContext } from 'contexts/MadeFormContext';
import { GetSearchImg } from 'api/made';
import { useTheme } from 'contexts/ThemeContext';

import { debounce } from 'lodash';

import { Back } from 'assets/index';
import SearchImgBar from './components/SearchImgBar';
import ImgItem from './components/ImgItem';

interface ImgItemType {
  id: number;
  name: string;
  img: string;
  information: string;
}

const ImgSearchPage = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const { formData, setFormData } = useFormContext();
  const [query, setQuery] = useState('');
  const [data, setData] = useState<ImgItemType[]>([]);
  const [isNone, setIsNone] = useState(false);

  const throttledSearch = useCallback(
    debounce(async (category: string, keyword: string) => {
      if (!keyword.trim()) return;

      try {
        const result = await GetSearchImg(category, keyword);
        setData(result.data);
        setIsNone(result.data?.length === 0);
      } catch (error) {
        console.error('검색 실패', error);
        setData([]);
        setIsNone(true);
      }
    }, 500),
    [],
  );

  useEffect(() => {
    if (query) {
      throttledSearch(formData.category, query);
    } else {
      setData([]);
      setIsNone(true);
    }
  }, [query, formData.category]);

  const handleClick = (item: ImgItemType) => {
    setFormData((prev) => ({
      ...prev,
      name: item.name,
      img: item.img,
      information: item.information,
    }));
    navigate('/made', { state: { step: 1 } });
  };

  return (
    <>
      <FixedDiv>
        <S.TopbarDiv>
          <BackDiv
            width={25}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(-1)}
            stroke={isDarkMode ? '#FFFFFF' : '#0E0C0C'}
          />
          <S.TopbarTitle>이미지 검색</S.TopbarTitle>
          <span style={{ width: 25 }}></span>
        </S.TopbarDiv>
        <SearchImgBar isBack={false} query={query} setQuery={setQuery} />
      </FixedDiv>
      <S.Wrapper>
        {isNone ? (
          <S.Msg>검색된 이미지가 없어요.</S.Msg>
        ) : (
          <S.Container>
            {data?.map((item) => (
              <React.Fragment key={item.id}>
                <ImgItem id={item.id} img={item.img} onClick={() => handleClick(item)} />
              </React.Fragment>
            ))}
          </S.Container>
        )}
      </S.Wrapper>
    </>
  );
};

export default ImgSearchPage;

const FixedDiv = styled(S.FixedDiv)`
  background-color: ${({ theme }) => theme.colors.bgColor};
`;

const BackDiv = styled(Back)``;
