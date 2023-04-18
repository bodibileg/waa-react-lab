import React from "react";
import Post from "./Post";

const Posts = (props) => {

  const { posts } = props;

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            author={post.author}
            id={post.id}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default Posts;
