'use client';
import React from 'react'

const EventHandling = () => {
    
  return (
    <div className='py-20 flex flex-col items-center'>
      <h1 className='text-center font-bold text-4xl mb-10'>Event Handling</h1>
      <button className='border bg-violet-800 text-white p-5 rounded-xl' 
            onClick={() => {alert('This is a notification')}}>Click Me</button>
    </div>
  )
}

export default EventHandling
