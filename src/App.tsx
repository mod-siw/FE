import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import GlobalStyle from './styles/global';
import { ThemeProvider } from './contexts/ThemeContext';
import { ItemProvider } from 'contexts/ItemContext';

const App = () => (
  <ThemeProvider>
    <ItemProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ItemProvider>
  </ThemeProvider>
);

export default App;
