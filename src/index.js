import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// apply initial theme quickly to avoid flash
try {
  const t = localStorage.getItem('bs-theme');
  if (t === 'light') document.documentElement.classList.add('light-theme');
} catch (e) {}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
