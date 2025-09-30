import { FC } from 'react'
import './styles/theme.css';
import { PostList } from '../widgets/PostList/PostList';
import { MainLayout } from '../shared/layouts/MainLayout';
import { ThemeProvider } from '../shared/lib/theme/ThemeProvider';

const App: FC = () => {
    return (
      <ThemeProvider>
        <MainLayout>
          <PostList/>
        </MainLayout>
      </ThemeProvider>
    )
}

export default App;
