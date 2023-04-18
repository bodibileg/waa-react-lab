import React, { useState } from 'react'
import Posts from './Post/Posts'

const Dashboard = () => {

    const [posts, setPosts] = useState(
        [
            { id: 111, title: "Happiness", author: "John" },
            { id: 112, title: "MIU", author: "Dean" },
            { id: 113, title: "Enjoy Life", author: "Jasmine" },
          ]
    );
    const [name, setName] = useState("");

    const onChange = (e) => {
        setName(e.target.value);
    }

    function handleChildClick() {
        posts[0].title = name;
        setPosts(posts);
        setName("");
    }

  return (
    <div>
        Dashboard
        <Posts posts={posts}/>
        <input type='text' value={name} onChange={onChange}/>
        <button onClick={handleChildClick} >Change Name</button>
    </div>

  )
}

export default Dashboard