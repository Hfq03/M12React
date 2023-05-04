import './Header.css';
import  React  from 'react';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';

export default function Header() {
  let [ roles, setRoles ] = useState([]);
  let [ nom, setNom ] = useState("");

  const getUser = async (e) => {
    try {
      const data = await fetch("https://backend.insjoaquimmir.cat/api/user", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": 'Bearer '  + authToken,
        },
        method: "GET",
      })
      const resposta = await data.json();
      if (resposta.success === true) {
        setNom(resposta.user.name);
        setRoles(resposta.roles);
      }else{
        console.log("La resposta no ha triomfat");
      }            
    } catch {
      console.log("Error");
    }
  };

  useEffect(()=>{
    getUser();
  }, [])

  return (
    <>
      <nav className="navegador">
        <div className='header'>
            <div className='left'>
            <Link to="/"><p>Logo</p></Link>
            </div>
            <div className="center">
            {/* <Link to="/about">About </Link> */}
            </div>
            <div className='links'>
                <div className="right">
                    <Link to="/rutinas">Rutinas</Link>
                    <Link to="/recetas">Recetas</Link>
                    <Link to="/asesorias">Asesorias</Link>
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <Link to="/tienda">Tienda</Link>
                    <Link to="/perfil">Perfil</Link>
                    <Link to="/carrito">Carrito</Link>
                </div>
                <div className="search-container">
                    <form>
                    <input type="text" placeholder="Search..." name="search"/>
                    <button className='btnSearch' title={"Buscar"}><i className="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
            <p className='nom'>
                {nom} 
                { roles.map (  (v)=> ( 
                <span key={v}> ( {v} ) </span>
                ) ) }
            </p>
        </div>
      </nav>
    </>
  );
}