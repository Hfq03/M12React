import React, { useState } from 'react'
import { useEffect } from 'react';
import Rutina from './Rutina';

const Rutinas = () => {

  // desa el retorn de dades de l'api rutinas
  let [ rutinas, setRutinas ] = useState([]);
  // Ho utilitzem per provar un refresc quan esborrem un element
  let [refresca,setRefresca] = useState(false)
      
  // només quan la vble d'estat refresca canvia el seu valor
  // refresca canviarà el valor quan fem alguna operació com delete   
  useEffect(() => {
    // Crida a l'api. mètode GET
    console.log("HOLA")
    fetch ("http://127.0.0.1:5175/api/routines",{
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET"
    }
    ).then( data => data.json() )
    .then (resposta => { 
        
        // Faria falta control·lar possible error
            console.log("Resposta: "+resposta.data); 
            // Actualitzem la vble d'estat rutinas
            setRutinas(resposta.data);
            // Canvia el valor de refresca
            // provocarà que entri a useEffect
            // al fer el rendertizat 
            setRefresca(false);
          
        } ) 
         
  }, [refresca])   // condició d'execució del useffect
    
  return (
   <>

  
 
<div className="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="mb-12 space-y-2 text-center">
        <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600 text-4x1">Llistat de Llocs</span>
       </div>
          <div className="grid gap-12 lg:grid-cols-2">
          { rutinas.map( (v,i)=> { return (
            <>
            {  <Rutina  setRefresca={ setRefresca } key={v.id} v={v}/>  }
            </>
        )})}
      </div>
  </div>
</div>
</>
  )
}

export default Rutinas
