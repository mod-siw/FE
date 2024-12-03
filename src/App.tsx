import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import LoginPage from './pages/AuthPage/LoginPage';
import SignupPage from './pages/AuthPage/SignupPage';
import MyPage from './pages/MyPage/MyPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginPage />
      <SignupPage />
      <MyPage />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
