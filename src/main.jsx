import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ استخدم BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* ✅ التصحيح هنا */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
