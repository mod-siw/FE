import { useEffect, useState } from 'react';
import { useTheme } from 'contexts/ThemeContext';
import * as S from './Landing.style';

import Carousel from './Carousel';
import Arrow from '../Arrow';
import { GetMain } from 'api/post';
import { Post } from 'types/post';

const Landing = () => {
  const { isDarkMode } = useTheme();
  const [nickname, setNickname] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);

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
      <S.Title>
        MoY가 포착한 <br />
        {nickname} 님의 {isDarkMode ? '문화 생활들' : '일상들'}
      </S.Title>
      <Carousel posts={posts} />
      <Arrow />
    </S.Wrapper>
  );
};

export default Landing;
