import React, { lazy, Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

//import PostsPage from '../pages/Posts';
//import PostDetailPage from '../pages/PostDetail';
//import TodosPage from '../pages/Todos';
//import TodoDetailPage from '../pages/TodoDetail';
//import UsersPage from '../pages/Users';
//import UserDetailPage from '../pages/UsersDetail';
//import AlbumsPage from '../pages/Albums';
//import AlbumDetailPage from '../pages/AlbumDetail';
//import PhotoPage from '../pages/Photos';
//import PhotoDetailPage from '../pages/PhotoDetail';

const PostsPage = lazy(() => import('../pages/Posts'));
const PostDetailPage = lazy(() => import('../pages/PostDetail'));
const TodosPage = lazy(() => import('../pages/Todos'));
const TodoDetailPage = lazy(() => import('../pages/TodoDetail'));
const UsersPage = lazy(() => import('../pages/Users'));
const UserDetailPage = lazy(() => import('../pages/UsersDetail'));
const AlbumsPage = lazy(() => import('../pages/Albums'));
const AlbumDetailPage = lazy(() => import('../pages/AlbumDetail'));
const PhotoPage = lazy(() => import('../pages/Photos'));
const PhotoDetailPage = lazy(() => import('../pages/PhotoDetail'));

const AppRouter = () => {
  return (
    <Suspense fallback="loading component...">
      <Routes>
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path=":id" element={<PostDetailPage />} />
        </Route>
        <Route path="todos">
          <Route index element={<TodosPage />} />
          <Route path=":id" element={<TodoDetailPage />} />
        </Route>
        <Route path="users">
          <Route index element={<UsersPage />} />
          <Route path=":id" element={<UserDetailPage />} />
        </Route>
        <Route path="albums">
          <Route index element={<AlbumsPage />} />
          <Route path=":id" element={<AlbumDetailPage />} />
        </Route>
        <Route path="photos">
          <Route index element={<PhotoPage />} />
          <Route path=":id" element={<PhotoDetailPage />} />
        </Route>
        <Route path="*" element={<Navigate to="users" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
