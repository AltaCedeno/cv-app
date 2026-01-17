
"use client"; // Necesario en Next.js si usas interactividad o hooks

import React from 'react'
import ReactDOM from 'react-dom/client'
import page from './app/page'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <page />
  </React.StrictMode>,
);

//mi componente principal aquí pagwe