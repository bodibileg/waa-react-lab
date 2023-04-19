import React from "react";
import Comment from "./Comment";
import "./PostDetails.css";
const PostDetails = (props) => {
  const { postDetail } = props;

  return (
    <div className="postDetail">
      PostDetails
      {postDetail == null ? null : (
        <div>
          <h2>Id: {postDetail.id}</h2>
          <h2>Title: {postDetail.title}</h2>
          <h2>Author: {postDetail.author}</h2>
          <h2>Content: {postDetail.content}</h2>
          <h2>Comment:</h2>
          {postDetail.comments?.map((com) => {
            return (
              // <React.memo>
                <Comment id={com.id} name={com.name} key={com.id} />
              // </React.memo>
            );
          })}
          <button onClick={() => props.delete(postDetail.id)}>
            Delete Post
          </button>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
