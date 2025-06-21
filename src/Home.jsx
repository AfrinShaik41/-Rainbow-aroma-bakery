import React from 'react'
import b from '../src/back.jpg'

const Home = () => {
  return (
    <div className='bg-orange-200 h-screen flex flex-row '>
      <img src={b} alt="Background" className='h-160 w-160'/>
      <div className='mt-60 ml-20 '>
        <h1 className='text-8xl text-orange-800'>Rainbow Aroma</h1>
        <p className='text-2xl'>Baked with love, Served with joy!</p>
      </div>
    </div>
  )
}

export default Home
