import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './layout/Header';
import Footer from "./layout/Footer";
import NotFound from "./NotFound";
import Routines from "./Routines";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import './App.css'
import { getRoutines } from './Api/api';
function App() {
  const routines = getRoutines();

  return (
    <>
      <Header />
      <Routines routines={routines} />
      {/* <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<></>} />
        <Route path="/rutinas" element={<></>} />
        <Route path="/recetas" element={<></>} />
        <Route path="/asesorias" element={<></>} />
        <Route path="/sobre_nosotros" element={<></>} />
        <Route path="/tienda" element={<></>} />
        <Route path="/perfil" element={<></>} />
        <Route path="/carrito" element={<></>} />
        <Route path="/about" element={<About />} />
      </Routes> */}

      <Footer />
    </>
  )
}

export default App