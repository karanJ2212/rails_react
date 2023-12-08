import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./src/constants";

export default function NewPostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { title, body };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    if (res.ok) {
      const { id } = await res.json();
      navigate(`/posts/${id}`);
    } else {
      console.log("an error has occured");
    }
  };
  return (
    <div>
      <h2>Create a new Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titleinput">Title</label>
          <input
            type="text"
            id="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bodyInput">body</label>
          <textarea
            type="text"
            id="bodyInput"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Create post</button>
        </div>
      </form>
    </div>
  );
}
