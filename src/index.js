import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRoutes from './src/routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
