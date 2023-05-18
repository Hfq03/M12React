import React, { useState } from 'react'
import { useEffect } from 'react';
import Rutina from './Rutina';
import { Link } from 'react-router-dom';
import './Fitcook.css'
import { HiPlus } from 'react-icons/hi';


const Rutinas = () => {

  // desa el retorn de dades de l'api rutinas
  let [ rutinas, setRutinas ] = useState([]);
  // Ho utilitzem per provar un refresc quan esborrem un element
  let [refresca,setRefresca] = useState(false)
      
  // només quan la vble d'estat refresca canvia el seu valor
  // refresca canviarà el valor quan fem alguna operació com delete   
  useEffect(() => {
    console.log("HOLA")
    fetch ("http://127.0.0.1:8000/api/routines",{
         headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        method: "GET"
    }
    ).then( data => data.json() )
    .then (resposta => { 
            console.log("Resposta: "+resposta.routines); 
            setRutinas(resposta.routines);
            setRefresca(false);
          
        } ) 
         console.log(rutinas)
  }, [refresca])   // condició d'execució del useffect
  
  return (
   <>
    <div className="rutinas">
      { rutinas.map( (v,i)=> { return (
        <>
        {  <Rutina  setRefresca={ setRefresca } key={v.id} v={v}/>  }   
        </>
      )})}
    </div>
    <Link to="/rutinas/add"><div className="circulo suma"><HiPlus/></div></Link>
    <Link to="/ejercicio/add"><div className="circulo-ejercicio suma"><HiPlus/></div></Link>
</>
  )
}

export default Rutinas
