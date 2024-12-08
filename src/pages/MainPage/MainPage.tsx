import * as S from './MainPage.style';
import Header from './components/Header';
import Landing from './components/landing/Landing';
import Scroll from './components/scroll/Scroll';
import FAB from 'components/FAB/FAB';

const MainPage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Landing />
      <Scroll />
      <FAB />
    </S.Wrapper>
  );
};

export default MainPage;
