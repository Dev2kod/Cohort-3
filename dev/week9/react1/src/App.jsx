import { useState } from 'react'
import './App.css'
import Post from './components/Post'

function App() { 
  return (
    <div className='flex justify-center items-center h-100vh bg-gray-300'>
    <div style={{display: "flex",justifyContent: "center", alignItems: "center",background: "#dfe6e9", height: "100vh" }}>
      <Post title="Post1" body="this is the body of post 1"/>
    </div>
    </div>
  )
}

export default App