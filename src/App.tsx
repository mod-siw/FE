import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import GlobalStyle from './styles/global';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
