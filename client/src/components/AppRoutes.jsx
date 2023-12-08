import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "../feature/posts/PostsList";
import PostsDetails from "../feature/posts/PostsDetails";
import NewPostForm from "../../NewPostForm";
import PostEditForm from "../feature/posts/PosteditForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />}></Route>
      <Route path="/posts/:id" element={<PostsDetails />}></Route>
      <Route path="/posts/:id/edit" element={<PostEditForm />}></Route>
      <Route path="/new" element={<NewPostForm />}></Route>
    </Routes>
  );
}
