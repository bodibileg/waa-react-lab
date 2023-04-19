import React, { useRef } from 'react'

const AddPost = (props) => {

    const titleRef = useRef();
    const authorRef = useRef();
    const contentRef = useRef();


    const createPost = () => {
        const post = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            content: contentRef.current.value,
        }
        titleRef.current.value = "";
        authorRef.current.value = "";
        contentRef.current.value = "";
        return post
    };

  return (
    <div>AddPost
        <h3>Title</h3>
        <input type='text' name='title' id='title' ref={titleRef}/>
        <h3>Author</h3>
        <input type='text' name='author' id='author' ref={authorRef}/>
        <h3>Content</h3>
        <input type='text' name='content' id='content' ref={contentRef}/>
        <button onClick={() => props.add(createPost())}>Add Post</button>
    </div>

  )
}

export default AddPost;