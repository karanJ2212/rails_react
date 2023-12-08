import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API_URL } from "../../constants";

export default function PostEditForm() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPosts = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        } else {
          console.log("error occured");
          throw res;
        }
      } catch (error) {
        console.log("error occured", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentPosts();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          body: post.body,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("success", data);
        navigate(`/posts/${id}`);
      } else {
        throw res;
      }
    } catch (error) {
      console.log("opps there is a error", error);
    }
  };
  if (!post) return <h2>Loading....</h2>;
  return (
    <div>
      <h2>edit post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="InputTitle">Title</label>
          <input
            type="text"
            value={post?.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="Inputbody">body</label>
          <textarea
            type="text"
            value={post?.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
