//import React from "react";
//api url from  .env.development file
import { useEffect, useState } from "react";
import { API_URL } from "../../constants";

export default function PostsList() {
  const [posts, setPost] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  //fetch post from the api
  useEffect(() => {
    async function loadPost() {
      try {
        const res = await fetch(API_URL);
        if (res.ok) {
          const json = await res.json();

          setPost(json);
        } else {
          throw res;
        }
      } catch (e) {
        setError("error occured. awkward...");
        console.log("an error occured ", e);
      } finally {
        setLoading(false);
      }
    }
    loadPost();
  }, []);
  return (
    <>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
}
