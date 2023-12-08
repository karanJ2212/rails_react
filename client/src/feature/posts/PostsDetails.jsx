import React from "react";

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../constants";

export default function PostsDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

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

  const deletePost = async () => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        navigate("/");
      } else {
        throw res;
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!post) return <h2>Loading....</h2>;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      {" | "}
      <Link to="/">Return to all posts</Link>
      {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}
