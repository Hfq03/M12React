import React, { useState } from 'react'
import { useEffect } from 'react';
import Rutina from './Rutina';
import { Link } from 'react-router-dom';
import './Fitcook.css'

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
 
<div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="grid gap-12 lg:grid-cols-2">
      { rutinas.map( (v,i)=> { return (
        <>
        {  <Rutina  setRefresca={ setRefresca } key={v.id} v={v}/>  }   
        </>
      )})}
    </div>
  </div>
  <Link to="/rutinas/add"><div class="circulo"></div></Link>
</div>
</>
  )
}

export default Rutinas
