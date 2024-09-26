'use client';
import React, {useState} from 'react'

const CounterExample = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count+1)
    }

    const handleDecrement = () => {
        setCount(count-1)
    }

    const handleReset = () => {
        setCount(0)
    }


  return (
    <div className='flex flex-col justify-center items-center py-20'>
      <h1 className='font-bold text-4xl'>Count Handling</h1>
      <h4 className='mt-5 mb-10 font-bold text-2xl'>Number of Counts : {count}</h4>
      <div className='flex gap-2'>
        <button onClick={handleIncrement} className='border p-2 bg-violet-800 text-white rounded-lg'>Increment</button>
        <button onClick={handleDecrement} className='border p-2 bg-violet-800 text-white rounded-lg'>Decrement</button>
        <button onClick={handleReset} className='border p-2 bg-violet-800 text-white rounded-lg'>Reset</button>
      </div>
    </div>
  )
}

export default CounterExample
