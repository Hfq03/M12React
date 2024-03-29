import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../userContext';

export const Receta = ({v, setRefresca} ) => {

  let { usuari, setUsuari,authToken,setAuthToken } = useContext(UserContext)

  console.log(v)


  const deleteReceta = (id,e) => {

    e.preventDefault();
  
    let confirma = confirm("Estas  segur?")
  
    if (confirma)
    {
      fetch ("https://backend.insjoaquimmir.cat/api/places/"+id,{
      
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken
          },
          method: "DELETE",
         
      }
      ).then( data => data.json() )
      .then (resposta => { 
          
              console.log(resposta); 
              if (resposta.success == true )
              {
                  console.log("ok")
                  // provoca el refrescat del component i la reexecució de useEffect
                  setRefresca(true);
              }
            } )
    }
  }
  return (
    <div key={v.id } className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
        <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900">{v.name}</h4>
                <p className="text-gray-600">{v.description}</p>
                <p className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                ❤️ { v.favorites_count }
              </p>
              
              </div>
              <Link to={"/places/"+v.id} className="w-max text-cyan-600"> Llegeix més </Link>
              { v.author.email === usuari ? 
              (   <>
                  <Link to={"/places/edit/"+v.id} className="w-max text-cyan-600"> Editar </Link>
                  <a href="#" className=" w-max text-cyan-600" onClick={ (e)=> deleteReceta(v.id,e) }> Esborrar</a>
                   </> 
              ) : ( <></> )}
            </div>
        </div>
        <span className="text-sm text-gray-900 font-light px-0 py-1 whitespace-nowrap"></span>
    </div>
  )
}