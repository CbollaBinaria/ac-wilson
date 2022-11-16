
import './App.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';

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
    </>
  );
}

export default App;
