import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about';
import Housing from './pages/housing';
import NotFound from './pages/notFound';
 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Housing/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>      
    </div>
  )
}

export default App 