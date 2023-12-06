//import React from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Post List</Link> {" | "}
      <Link to="/new">new Post</Link>
    </nav>
  );
}
