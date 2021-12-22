import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import PostsPage from "../pages/Posts";
import PostDetailPage from "../pages/PostDetail";
import TodosPage from "../pages/Todos";
import TodoDetailPage from '../pages/TodoDetail'
import UsersPage from "../pages/Users";
import UserDetailPage from "../pages/UsersDetail";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="posts">
        <Route index element={<PostsPage />} />
        <Route path=":id" element={<PostDetailPage />} />
      </Route>
      <Route path="todos">
      <Route index element={<TodosPage/>} />
      <Route path=':id' element={<TodoDetailPage/>} />
      </Route>
      <Route path="users">
      <Route index element={<UsersPage/>} />
      <Route path=':id' element={<UserDetailPage/>} />
      </Route>
      <Route path="*" element={<Navigate to= 'users'/>} />
    </Routes>
  );
};

export default AppRouter;
