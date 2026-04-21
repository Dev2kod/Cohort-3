import React from 'react'
import Post from './Post'
import { useState } from 'react'

const Postlist = () => {
  const [postlist, setPostlist] = useState([])
  
  const addPost =()=>{}

  return (
    <div>
        <button>add</button>
        {postlist}
        <Post/>
    </div>
  )
}

export default Postlist