import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes} from 'react-router-dom'
import Router from './Router';
import './style/main.scss'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routes>
    <Router />
  </Routes>
)

