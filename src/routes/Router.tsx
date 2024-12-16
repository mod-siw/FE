import { createBrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import MainPage from '../pages/MainPage/MainPage';
import MadePage from '../pages/MadePage/MadePage';
import LoginPage from '../pages/AuthPage/LoginPage';
import SignupPage from '../pages/AuthPage/SignupPage';
import KakaoSignupPage from '../pages/AuthPage/KakaoSignupPage';
import KakaoCallbackHandler from 'pages/AuthPage/components/KakaoCallbackHandler';
import MyPage from '../pages/MyPage/MyPage';
import ShareMyPage from '../pages/MyPage/ShareMyPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import ListPage from '../pages/ListPage/ListPage';
import DetailPage from 'pages/DetailPage/DetailPage';
import ImgSearchPage from 'pages/SearchPage/ImgSearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ScrollToTop />,
    children: [
      { path: '', element: <MainPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'signup/kakao', element: <KakaoSignupPage /> },
      { path: 'accounts/kakao/callback', element: <KakaoCallbackHandler /> },
      { path: 'my', element: <MyPage /> },
      { path: '/:nickname/:id/:mode', element: <ShareMyPage /> },
      { path: 'made', element: <MadePage /> },
      { path: 'made/img', element: <ImgSearchPage /> },
      { path: 'search/', element: <SearchPage /> },
      { path: 'list/:category', element: <ListPage /> },
      { path: 'detail/:id', element: <DetailPage /> },
    ],
  },
]);

export default router;
