import React from 'react'
import react from '../assets/react.svg'

const Post = () => {
  return (

    <div className='flex flex-col w-full bg-white rounded-lg shadow-lg p-4 m-4 border-b-gray-800'>         
        <div className='flex items-center'>
            <div className=''>
                <img src={react} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Post 