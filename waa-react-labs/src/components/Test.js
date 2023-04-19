import React, { useContext } from 'react'
import { PostContext } from '../context/PostContext';

const Test = () => {

    const { selectedId } = useContext(PostContext);
  return (
    <div>
        Test - Context
        <h1>{selectedId}</h1>
    </div>
  )
}

export default Test