import React from "react";
import PostItem from "./PostFeedItem";
function PostFeed(props) {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostFeed;
