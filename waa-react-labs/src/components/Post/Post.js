import React from 'react'
import "./Post.css"

const Post = (props) => {
  return (
    <div className='post'>
        <h1>Id: {props.id}</h1>
        <h1>Title: {props.title}</h1>
        <h1>Author: {props.author}</h1>   
    </div>
  )
}

export default Post