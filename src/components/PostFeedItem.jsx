import React from "react";
import { Link } from "react-router-dom";

function PostItem(props) {
  const { post } = props;
  return (
    <div className="post-item">
      <h2>{post.title}</h2>
      <span>{post.createdAt}</span>
      <p>Likes:{post.reactions.likes}</p>
      <Link to={`/posts/${post.id}`}>See Details</Link>
    </div>
  );
}

export default PostItem;
