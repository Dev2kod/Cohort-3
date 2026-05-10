import { useState } from 'react'
import './App.css'
import Post from './components/Post'
import Postlist from './components/Postlist'

function App() { 
  return (
    <div className='flex justify-center items-center h-100vh bg-gray-300'>
    <div style={{display: "flex",justifyContent: "center", alignItems: "center",background: "#dfe6e9", height: "100vh" }}>
      <Postlist />
    </div>
    </div>
  )
}

export default App