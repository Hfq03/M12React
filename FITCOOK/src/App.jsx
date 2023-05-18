import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './layout/Header';
import Footer from "./layout/Footer";
import NotFound from "./NotFound";
import AboutUs from "./fitcook/Aboutus"
import Recetas from "./fitcook/Recetas"
import Rutinas from "./fitcook/Rutinas"
import RutinasAdd from "./fitcook/RutinasAdd"
import Home from "./fitcook/Home"
import Store from "./Tienda/Tienda"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/rutinas" element={<Rutinas />} />
        <Route path="/rutinas/add" element={<RutinasAdd /> } />
        <Route path="/recetas" element={<Recetas/>} />
        <Route path="/asesorias" element={<></>} />
        <Route path="/nosotros" element={<AboutUs/>} />
        <Route path="/tienda" element={<Store/>} />
        <Route path="/perfil" element={<></>} />
        <Route path="/carrito" element={<></>} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App