import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Coin from './components/pages/Coin/Coin'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
