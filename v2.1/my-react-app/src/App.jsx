import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Importa Route y Routes en lugar de BrowserRouter
import Home from './pages/home.jsx';
import Contact from './pages/contact.jsx';
import Gallery from './pages/gallery.jsx';
import Project from './pages/project.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/proyecto" element={<Project />} />
    </Routes>
  );
}

export default App;

