import { useState } from "react";
import React from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    const add1 = ()=>{
        setCount(e=>e+1)
    }
  return (<>
  <div className="flex flex-col gap-2 items-center justify-center">
    <div>{count}</div>
    <button className="p-2 border-1" onClick={()=>{add1()}}>add 1</button>
    </div>
</>)
}

export default Count