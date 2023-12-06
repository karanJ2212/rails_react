//import React from "react";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../constants";

export default function PostsDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentPosts = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (res.ok) {
          const json = await res.json();
          setPost(json);
        } else {
          throw res;
        }
      } catch (error) {
        console.log("error occured", error);
      }
    };
    fetchCurrentPosts();
  }, [id]);
  if (!post) return <h2>Loading....</h2>;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Return to all posts</Link>
    </div>
  );
}
