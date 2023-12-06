import "./App.css";
import PostsLists from "./feature/posts/PostsList";

function App() {
  return (
    <>
      <div className="container">
        <h1>Welcome to the React app!</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        <PostsLists />
      </div>
    </>
  );
}

export default App;
