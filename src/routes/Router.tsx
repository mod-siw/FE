import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import MadePage from '../pages/MadePage/MadePage';
import LoginPage from '../pages/AuthPage/LoginPage';
import SignupPage from '../pages/AuthPage/SignupPage';
import KakaoSignupPage from '../pages/AuthPage/KakaoSignupPage';
import MyPage from '../pages/MyPage/MyPage';
import ShareMyPage from '../pages/MyPage/ShareMyPage';

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
      { path: 'made', element: <MadePage /> },
    ],
  },
]);

export default router;
