import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <BrowserRouter> {/* Envuelve tu App con BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);