import React from "react";
import "./PostDetails.css"
const PostDetails = (props) => {
  const { postDetail } = props;

  return (
    <div className="postDetail">
      PostDetails
      {postDetail == null ? null : <div>
        <h2>Id: {postDetail.id}</h2>
        <h2>Title: {postDetail.title}</h2>
        <h2>Author: {postDetail.author}</h2>
        <h2>Content: {postDetail.content}</h2>
        <h2>Comment:</h2>
        {postDetail.comments?.map((com) => {
          return (
            <div className="comment">
              <h3>{com.id}</h3>
              <h3>{com.name}</h3>
            </div>
          );
        })}
      </div>}
    </div>
  );
};

export default PostDetails;
