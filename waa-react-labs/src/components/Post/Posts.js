import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import PostDetails from "../PostDetails/PostDetails";
import AddPost from "../AddPost/AddPost";
import {PostContext} from "../../context/PostContext";
import Test from "../Test";

const Posts = () => {
  const [selectedId, setSelectedId] = useState();
  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDepostDetail] = useState(null);
  const [refresh, setRefresh] = useState();

  console.log("rendered");

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/1/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.error(error));
    console.log("useEffect 2");
  }, [refresh]);

  const getPostDetails = (id) => {
    axios
      .get(`http://localhost:8080/users/1/posts/${id}`)
      .then((response) => {
        setPostDepostDetail(response.data);
      })
      .catch((error) => console.error(error));
  };

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:8080/users/1/posts/${id}`)
      .then((response) => {
        setPostDepostDetail(null);
        if (response.status === 200) {
          setPosts(posts.filter((post) => post.id !== id));
        }
      })
      .catch((error) => console.error(error));
  };

  const addPost = (post) => {
    axios
      .post(`http://localhost:8080/users/1/posts`, post)
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          setRefresh(refresh ? false : true);
        }
      })
      .catch((error) => console.error(error));
  };


  return (
    <div>
      <PostContext.Provider value={{ selectedId, setSelectedId }}>
        {posts.map((post) => (
          <Post
            title={post.title}
            author={post.author}
            id={post.id}
            content={post.content}
            key={post.id}
            click={getPostDetails}
          />
        ))}
        <PostDetails
          postDetail={postDetail ? postDetail : null}
          delete={deletePost}
        />
        <AddPost add={addPost} />
        <Test/>
      </PostContext.Provider>
    </div>
  );
};

export default Posts;
