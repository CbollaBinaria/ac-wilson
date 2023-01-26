import React from 'react';
import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WspLink from './components/WspLink';
import Warning from './components/Warning';
const windowWidth = window.innerWidth;

function App() {
  return (
    (windowWidth < 500) ?
    <>
        <NavBar/>
        <WspLink/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="#Nosotros" element={<Home/>}/>
        <Route path="#Precios" element={<Home/>}/>
        <Route path="#Contacto" element={<Home/>}/>
      </Routes>
      <Footer/>
    </> 
    : <Warning/>
  );
}

export default App;
