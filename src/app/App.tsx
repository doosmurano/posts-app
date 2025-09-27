import { FC } from 'react'
import './styles/theme.css';
import { PostList } from '@/widgets/PostList/PostList';
import { MainLayout } from '@/shared/layouts/MainLayout';

const App: FC = () => {
    return (
      <MainLayout>
          <PostList/>
      </MainLayout>
    )
}

export default App;
