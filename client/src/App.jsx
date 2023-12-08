import "./App.css";
import React from "react";
// import PostsLists from "./feature/posts/PostsList";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Welcome to the React app!</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <Navbar />
        {/* <PostsLists /> */}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
