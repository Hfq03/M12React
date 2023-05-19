import React from 'react'
import { useState } from 'react';

import "../App.css"

const RutinasAdd = ({ setAfegir }) => {

  let [ formulari,setFormulari] = useState({});
  const [ avis, setAvis] = useState("");
  const [error, setError] = useState("")

  const handleChange = (e)=> {

      e.preventDefault();

      // Esborrem qualsevol possible avís o error
      setError("");
      setAvis("");

      if (e.target.type && e.target.type==="file")
      {
        console.log(e.target.files[0].name)
        setFormulari({
          ...formulari,
          [e.target.name] : e.target.files[0]
        })

      }
      else {
      // Canviem l'element de l'objecte de l'estat
      setFormulari({

        ...formulari,
        [e.target.name] : e.target.value

      })
    }

  } 
  const afegir = (e) => {

    e.preventDefault();

    let {title,description,level,duration,muscle_groups}=formulari;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("level", level);
    formData.append("duration", duration);
    formData.append("muscle_groups", muscle_groups);

    console.log("Afegint una rutina....")
    console.log(formulari)
    console.log(JSON.stringify({ title,description,level,duration,muscle_groups }))
    // Enviam dades a l'aPI i recollim resultat
    fetch ("http://127.0.0.1:8000/api/routines",{
        headers: {
            Accept: 'application/json',
            //'Content-type': 'multipart/form-data',
            //Authorization: 'Bearer '
        },
        method: "POST",
        //body: JSON.stringify({ title,description,level,duration,muscle_groups })  
        body: formData

      }
    
    ).then( data => data.json() )
    .then (resposta => { 
            console.log(resposta); 
            if (resposta.success == true )
            {
              //setAfegir(false); // Tornem al llistat
              setAvis("Rutina introduit correctament")
            }
            else
            {
              console.log("S\'ha produit un error")
              setError(resposta.message)
            }
        })

  }

  const tornar = (e) => {

    e.preventDefault();
    setAfegir(false);

  }


  return (
    <>
     <div className="py-9 pl-9">
      <div className="py-9 flex flex-col gap-y-2">
          <label className="text-gray-600" htmlFor="Title">Titutlo</label>
          <input
              type="text"
              value={formulari.title}
              name="title"
              className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
              onChange={ handleChange}
          />
      </div>

      <div className="w-1/3">
    <label className="text-gray-600">Descripció</label>
    <textarea 
      name="description"
      value={formulari.description}
      className="
        w-full
        h-32
        px-4
        py-3
        border-2 border-gray-300
        rounded-sm
        outline-none
        focus:border-blue-400
      "
      placeholder="Explica en que consiste la rutina"
      onChange={ handleChange}
    ></textarea>

  {/* <div className="flex justify-center">
    <div className="mb-3 w-96">
      <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-600">Imatge PNG, JPG or GIF (MAX. 800x400px)</label>
      <input name="upload" 
      onChange={ handleChange}
      className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="upload"/>
    </div>
  </div> */}

  <label htmlFor="level" className="block mb-2 text-sm text-gray-600 dark:text-white">Selecciona la dificultad</label>
  <select value={formulari.level} name="level" id="level" onChange={ handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option defaultValue value="">----</option>
    <option  value="1">Facil</option>
    <option value="2">Medio</option>
    <option value="3">Dificil</option>
  </select>
  <span className="flex flex-col gap-y-2">
          <label className="text-gray-600" htmlFor="Name">Duracion</label>
          <input
            type="text"
            name="duration"
            value={formulari.duration}
            onChange={ handleChange}
            className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
          />
  </span>

  <span className="flex flex-col gap-y-2">
          <label className="text-gray-600" htmlFor="Name">Grupo Muscular</label>
          <input
            type="text"
            name="muscle_groups"
            value={formulari.muscle_groups}
            onChange={ handleChange}
            className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
          />
  </span>

  <div className="py-9">
    <button onClick={afegir}  type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Afegir Entrada
      </button>
      { error ? (<div className="flex w-full items-center space-x-2 rounded-2xl bg-red-50 px-4 ring-2 ring-red-200 ">{error}</div>) : (<></>)  }
      { avis ? (<div className="flex w-full items-center space-x-2 rounded-2xl bg-green-50 px-4 ring-2 ring-green-200 ">{avis}</div>) : (<></>)  }
    </div>
      </div>
    </div>
    </>
  )
}

export default RutinasAdd
