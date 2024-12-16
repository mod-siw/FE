import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import GlobalStyle from './styles/global';
import { ThemeProvider } from './contexts/ThemeContext';
import { ItemProvider } from 'contexts/ItemContext';
import { UserProvider } from 'contexts/UserContext';
import { FormProvider } from 'contexts/MadeFormContext';

const App = () => (
  <ThemeProvider>
    <UserProvider>
      <ItemProvider>
        <FormProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </FormProvider>
      </ItemProvider>
    </UserProvider>
  </ThemeProvider>
);

export default App;
