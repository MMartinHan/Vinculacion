import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './contacto.css'
import { InicioDesk } from './index.jsx'
import  Home  from './home.jsx' 
import Contacto from './contacto.jsx'
import  Nosotros  from './nosotros.jsx'
import Proyecto from './proyecto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contacto />
  </React.StrictMode>,
)
