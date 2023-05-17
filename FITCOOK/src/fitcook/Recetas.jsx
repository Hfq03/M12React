import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Receta from './Receta';
import './Fitcook.css'

const Recetas = () => {

  // desa el retorn de dades de l'api rutinas
  let [ recetas, setRecetas ] = useState([]);
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
            setRecetas(resposta.routines);
            setRefresca(false);
          
        } ) 
         console.log(recetas)
  }, [refresca])   // condició d'execució del useffect

  return (
    <div className='recetas'>
        <div className='recetascont'>
            <div className='recetasimg'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQSJopZk9FWmGT1CALGbL5q-GWX-6QedcoA&usqp=CAU'></img>
            </div>
            <div className='recetasinf'>
                <div>TITULO</div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure aperiam architecto eaque hic, ipsa molestiae. 
                    Consequuntur tempore mollitia sed obcaecati reiciendis 
                    voluptatum tempora ullam nulla optio saepe, cupiditate odit quaerat.</p>
                </div>
                <div>ESTRELLAS</div>
            </div>
        </div>
        <Link to="/rutinas/"><div class="circulo"></div></Link>
        <div className='recetascont'>
            <div className='recetasimg'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQSJopZk9FWmGT1CALGbL5q-GWX-6QedcoA&usqp=CAU'></img>
            </div>
            <div className='recetasinf'>
                <div>TITULO</div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure aperiam architecto eaque hic, ipsa molestiae. 
                    Consequuntur tempore mollitia sed obcaecati reiciendis 
                    voluptatum tempora ullam nulla optio saepe, cupiditate odit quaerat.</p>
                </div>
                <div>ESTRELLAS</div>
            </div>
        </div>
        <div className='recetascont'>
            <div className='recetasimg'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQSJopZk9FWmGT1CALGbL5q-GWX-6QedcoA&usqp=CAU'></img>
            </div>
            <div className='recetasinf'>
                <div>TITULO</div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure aperiam architecto eaque hic, ipsa molestiae. 
                    Consequuntur tempore mollitia sed obcaecati reiciendis 
                    voluptatum tempora ullam nulla optio saepe, cupiditate odit quaerat.</p>
                </div>
                <div>ESTRELLAS</div>
            </div>
        </div>
        <div className='recetascont'>
            <div className='recetasimg'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQSJopZk9FWmGT1CALGbL5q-GWX-6QedcoA&usqp=CAU'></img>
            </div>
            <div className='recetasinf'>
                <div>TITULO</div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure aperiam architecto eaque hic, ipsa molestiae. 
                    Consequuntur tempore mollitia sed obcaecati reiciendis 
                    voluptatum tempora ullam nulla optio saepe, cupiditate odit quaerat.</p>
                </div>
                <div>ESTRELLAS</div>
            </div>
        </div>
        <div className='recetascont'>
            <div className='recetasimg'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQSJopZk9FWmGT1CALGbL5q-GWX-6QedcoA&usqp=CAU'></img>
            </div>
            <div className='recetasinf'>
                <div>TITULO</div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure aperiam architecto eaque hic, ipsa molestiae. 
                    Consequuntur tempore mollitia sed obcaecati reiciendis 
                    voluptatum tempora ullam nulla optio saepe, cupiditate odit quaerat.</p>
                </div>
                <div>ESTRELLAS</div>
            </div>
        </div>
        <div className='recetascont'>
            <div className='recetasimg'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQSJopZk9FWmGT1CALGbL5q-GWX-6QedcoA&usqp=CAU'></img>
            </div>
            <div className='recetasinf'>
                <div>TITULO</div>
                <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure aperiam architecto eaque hic, ipsa molestiae. 
                    Consequuntur tempore mollitia sed obcaecati reiciendis 
                    voluptatum tempora ullam nulla optio saepe, cupiditate odit quaerat.</p>
                </div>
                <div>ESTRELLAS</div>
            </div>
        </div>  
    </div>
  );
}

export default Recetas;