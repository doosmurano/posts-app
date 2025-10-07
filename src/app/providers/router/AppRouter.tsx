import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { PostsPage } from "@/pages/PostPage/ui/PostsPage";
import { UserPostsPage } from "@/pages/UserPostsPage/ui/UserPostsPage";
import { UserTodosPage } from "@/pages/UserTodosPage/ui/UserTodosPage";
import { PostDetailPage } from "@/pages/PostDetailPage/ui/PostDetailPage";
import { UserAlbumsPage } from "@/pages/UserAlbumsPage/ui/UserAlbumsPage";
import { AlbumPhotosPage } from "@/pages/AlbumPhotosPage/ui/AlbumPhotosPage";

export const AppRouter: FC = () => {
  return (
       <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostDetailPage />} />
          <Route path="/users/:id/posts" element={<UserPostsPage />} />
          <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
          <Route path="/users/:id/todos" element={<UserTodosPage />} />
          <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
       </Routes>
    );
}
