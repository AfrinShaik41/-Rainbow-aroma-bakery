import React from 'react'

import l from '../src/log.jpg'
import { Link } from 'react-router-dom' 

const Nav = () => {
  return (
    
    <div className=''>
    <nav className="flex items-center justify-between bg-black  mb-2">
    <img src={l} alt="" className='w-30 h-30 rounded-full'/>
    <ul>
      <li className=' list-none inline-block text-xl  px-5'><Link to="/" className='text-white'>Home</Link></li>
      <li className=' list-none inline-block text-xl px-5'><Link to="/About" className='text-white'>About</Link></li>
      <li className=' list-none inline-block text-xl px-5'><Link to="/Menu" className='text-white'>Menu</Link></li>
      <li className=' list-none inline-block text-xl px-5'><Link to="/Gallery" className='text-white'>Gallery</Link></li>
      <li className=' list-none inline-block text-xl px-5'><Link to="/Customers" className='text-white'>Customer</Link></li>
      <li className=' list-none inline-block text-xl px-5'><Link to="/" className='text-white'>Contact</Link></li>
    </ul>
  </nav>
</div>

  )
}

export default Nav
