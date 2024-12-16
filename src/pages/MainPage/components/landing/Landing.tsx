import { useEffect, useState } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import * as S from './Landing.style';

import Carousel from './Carousel';
import Arrow from '../Arrow';
import { GetMain } from 'api/post';
import { Post } from 'types/post';
import { getCookie } from 'api/http';

const Landing = () => {
  const { isDarkMode } = useTheme();
  const [nickname, setNickname] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

  const token = getCookie('access_token');

  useEffect(() => {
    const fetchData = async () => {
      const mainData = await GetMain(isDarkMode);
      setNickname(mainData.nickname);
      setPosts(mainData.posts);
    };

    fetchData();
  }, [isDarkMode]);

  return (
    <S.Wrapper>
      {token ? (
        <S.Title>
          {isDarkMode ? '2024년 문화와 함께 한' : '2024년 일상 속'} <br />
          {nickname}님의 순간
        </S.Title>
      ) : (
        <S.Title>
          MoY가 포착한 <br />
          {nickname}님의 {isDarkMode ? '문화생활' : '일상'}
        </S.Title>
      )}
      <Carousel posts={posts} />
      <Arrow />
    </S.Wrapper>
  );
};

export default Landing;
