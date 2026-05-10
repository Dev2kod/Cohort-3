import Post from './Post'
import { useState } from 'react'

const Postlist = () => {
  const [postlist, setPostlist] = useState([])
  
  const addPost =()=>{}

  return (
    <div>
    <button onClick={()=>addPost}>add</button>
        postlist.map()
    </div>
  )
}

export default Postlist