import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Housing from './pages/Housing';
import NotFound from './pages/NotFound';
 
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>      
    </div>
  )
}

export default Router 