import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './layout/Header';
import Footer from "./layout/Footer";
import NotFound from "./NotFound";
import AboutUs from "./fitcook/Aboutus"
import Asesorias from "./fitcook/Asesorias"
import Recetas from "./fitcook/Recetas"
import Rutinas from "./fitcook/Rutinas"
import RutinasAdd from "./fitcook/RutinasAdd"
import Ejercicios from "./fitcook/Ejercicios"
import EjerciciosAdd from "./fitcook/EjerciciosAdd" 
import EjerciciosEdit from "./fitcook/EjerciciosEdit" 
import Chat from "./fitcook/Chat" 
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
        <Route path="/" element={<Home/>} />
        <Route path="/rutinas" element={<Rutinas/>} />
        <Route path="/rutinas/add" element={<RutinasAdd/> } />
        <Route path="/ejercicios" element={<Ejercicios/>} />
        <Route path="/ejercicios/add" element={<EjerciciosAdd/> } />
        <Route path="/ejercicios/edit/:id" element={<EjerciciosEdit/>} />
        <Route path="/recetas" element={<Recetas/>} />
        <Route path="/asesorias" element={<Asesorias/>} />
        <Route path="/nosotros" element={<AboutUs/>} />
        <Route path="/tienda" element={<Store/>} />
        <Route path="/perfil" element={<></>} />
        <Route path="/carrito" element={<></>} />
        <Route path="/chat" element={<Chat/>} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App