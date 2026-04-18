import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Profile/>
    <div className='flex items-center justify-center'>
      <div className='font-extrabold bg-amber-200 size-48 flex justify-center text-center'>
        Hi there

      </div>
      </div>
    </>
  )
}

export default App