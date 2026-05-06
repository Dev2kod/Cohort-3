import React from 'react'

const Post = (props) => {
  const {title, body} = props
  
  return (
    <div className='p-10 border-2 shadow-md rounded-md bg-white'>
    <div className='flex flex-col gap-3 justify-center items-center'>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
    </div>
  )
}

export default Post