import { FC } from 'react'
import './styles/theme.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './providers/router/AppRouter';
import { MainLayout } from '../shared/layouts/MainLayout';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';

const App: FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
