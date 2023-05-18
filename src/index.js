import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Routes} from 'react-router-dom'
import App from './App';
import './style/index.css' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routes>
    <App />
  </Routes>,
);