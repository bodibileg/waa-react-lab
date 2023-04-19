import React from "react";
import "./Post.css";

const Post = (props) => {

  return (
    <div>
      <button className="post" onClick={() => props.click(props.id)}>
        <div>
          <h1>Id: {props.id}</h1>
          <h1>Title: {props.title}</h1>
          <h1>Author: {props.author}</h1>
          <h1 className="content">Content: {props.content}</h1>
        </div>
      </button>
    </div>
  );
};

export default Post;
