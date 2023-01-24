import React from 'react';
import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="#Nosotros" element={<Home/>}/>
        <Route path="#Precios" element={<Home/>}/>
        <Route path="#Contacto" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
