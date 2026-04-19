import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Count from './components/Count'
import ToggleMsg from './components/ToggleMsg'

function App() {
  return (
    <div style={{background: "#dfe6e9", height: "100vh" }}>
      <ToggleMsg />
      <ToggleMsg />
      <ToggleMsg />
    </div>
  )
}export default App