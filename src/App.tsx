import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import GlobalStyle from './styles/global';
import { ThemeProvider } from './contexts/ThemeContext';

import LoginPage from './pages/AuthPage/LoginPage';
import SignupPage from './pages/AuthPage/SignupPage';
import MyPage from './pages/MyPage/MyPage';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <LoginPage />
    <SignupPage />
    <MyPage />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
