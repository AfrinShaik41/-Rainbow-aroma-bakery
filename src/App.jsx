import React from 'react'
import  { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Customers from './Customers'
import Gallery from './Gallery'
import Menu from './Menu'
import Footer from './Footer'

const App = () => {
  return (
    <div>
    
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<Nav/>}></Route>

        <Route path='/About' element={<About/>}></Route>
        <Route path='/Customers' element={<Customers/>}></Route>
        <Route path='/Gallery' element={<Gallery/>}></Route>
        <Route path='/Menu' element={<Menu/>}></Route>


        

    </Routes>
      <Footer className='absolute bottom-0.5'/>
      
    </div>
  )
}

export default App
