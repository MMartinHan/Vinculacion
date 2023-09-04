import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from '../src/pages/home.jsx'
import Contact from '../src/pages/contact.jsx'
import Gallery from '../src/pages/gallery.jsx'
import Project from '../src/pages/project.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
