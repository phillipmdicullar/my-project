import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Projects from './pages/Projects'
function App() {
  

  return (
   <div className="App">
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/projects' element={<Projects />}/>
         <Route path='/courses' element={<Courses />}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
