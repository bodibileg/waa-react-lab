import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios"
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDepostDetail] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users/1/posts")
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => console.error(error));
  }, []);

  const clickHandle = (id) => {
    axios.get(`http://localhost:8080/users/1/posts/${id}`)
    .then(response => {
      setPostDepostDetail(response.data);
    })
    .catch(error => console.error(error));
  }

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            author={post.author}
            id={post.id}
            content={post.content}
            key={post.id}
            click={clickHandle}
          />
        );
      })}
      <PostDetails postDetail={postDetail ? postDetail : null}/>
    </div>
  );
};

export default Posts;
