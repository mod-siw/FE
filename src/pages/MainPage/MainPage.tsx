import * as S from './MainPage.style';
import Header from './components/Header';
import Landing from './components/landing/Landing';

const MainPage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Landing />
    </S.Wrapper>
  );
};

export default MainPage;
