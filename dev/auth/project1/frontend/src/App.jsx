import {useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([])

const fetchData = async()=>{
  try {
    const response = await axios.get('http://localhost:3000/notes');
    setNotes(response.data.notes);

  } catch (error) {    console.error('Error fetching data:', error);
  }
}

const fetch = useEffect(() => {
  fetchData()

}, [])

  return (
    <>
    <div className="App flex flex items-center justify-center gap-4">
      <div className="Flex flex-col items-center bg-gray-100 justify-center gap-4">
          {notes.map((note,index)=>{
            return(
              <div key={Date.now() + index} >
                <h3>{note.title}</h3>
                <p>{note.description}</p>
              </div>
            )
          })}
      </div>  
      <div>
        <button onClick={fetchData} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">Fetch Notes</button>
      </div>
      </div>
    </>
  )
}

export default App
