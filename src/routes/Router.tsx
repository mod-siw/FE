import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import LoginPage from '../pages/AuthPage/LoginPage';
import SignupPage from '../pages/AuthPage/SignupPage';
import KakaoSignupPage from '../pages/AuthPage/KakaoSignupPage';
import MyPage from '../pages/MyPage/MyPage';
import ShareMyPage from '../pages/MyPage/ShareMyPage';
import SearchPage from '../pages/SearchPage/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '', element: <MainPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'signup/kakao', element: <KakaoSignupPage /> },
      { path: 'my', element: <MyPage /> },
      { path: 'my/share', element: <ShareMyPage /> },
      { path: 'search/', element: <SearchPage /> },
    ],
  },
]);

export default router;
