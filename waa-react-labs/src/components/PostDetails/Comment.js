import React from 'react'

const Comment = (props) => {
  console.log("comment ", props.id);
  return (
    <div className='comment'>
        <h3>{props.id} {props.name}</h3>
    </div>
  )
}

export default Comment