// import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsList from "../feature/posts/PostsList";
import PostsDetails from "../feature/posts/PostsDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />}></Route>
      <Route path="/posts/:id" element={<PostsDetails />}></Route>
      <Route path="/new" element={<h1>This is a new post</h1>}></Route>
    </Routes>
  );
}
