import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Count from './components/Count'
import ToggleMsg from './components/ToggleMsg'
import Postlist from './components/Postlist'

function App() {
  return (
    <div style={{background: "#dfe6e9", height: "100vh" }}>
      <Postlist/>
    </div>
  )
}export default App