import React from 'react'
import react from '../assets/react.svg'

const Post = () => {
  return (
    <div className='flex flex-col'>         
        <div className='flex items-center'>
            <div className=''>
                <img src={react} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Post 