import React from 'react'
import b from '../src/back.jpg'

const Home = () => {
  return (
    <div className='bg-orange-200 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10'>
      <img src={b} alt="Background" className='w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-xl' />
      
      <div className='mt-8 md:mt-0 md:ml-10 text-center md:text-left'>
        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-orange-800 font-bold'>Rainbow Aroma</h1>
        <p className='text-lg sm:text-xl md:text-2xl mt-4'>Baked with love, Served with joy!</p>
      </div>
    </div>
  )
}

export default Home
