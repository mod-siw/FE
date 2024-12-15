import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import GlobalStyle from './styles/global';
import { ThemeProvider } from './contexts/ThemeContext';
import { ItemProvider } from 'contexts/ItemContext';
import { UserProvider } from 'contexts/UserContext';

const App = () => (
  <ThemeProvider>
    <UserProvider>
      <ItemProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ItemProvider>
    </UserProvider>
  </ThemeProvider>
);

export default App;
