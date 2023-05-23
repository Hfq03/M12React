import React from 'react'
import { useState, useEffect } from 'react';

import "../App.css"

const RutinasAdd = ({ setAfegir }) => {

//   let [ formulari,setFormulari] = useState({});
//   const [ avis, setAvis] = useState("");
//   const [error, setError] = useState("")

//   const handleChange = (e)=> {

//       e.preventDefault();

//       setError("");
//       setAvis("");

//       if (e.target.type && e.target.type==="file")
//       {
//         console.log(e.target.files[0].name)
//         setFormulari({
//           ...formulari,
//           [e.target.name] : e.target.files[0]
//         })

//       }
//       else {

//       setFormulari({

//         ...formulari,
//         [e.target.name] : e.target.value

//       })
//     }

//   } 
//   const afegir = (e) => {

//     e.preventDefault();

//     let {title,description,level,duration,muscle_groups}=formulari;
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("level", level);
//     formData.append("duration", duration);
//     formData.append("muscle_groups", muscle_groups);

//     console.log("Afegint una rutina....")
//     console.log(formulari)
//     console.log(JSON.stringify({ title,description,level,duration,muscle_groups }))

//     fetch ("http://127.0.0.1:8000/api/routines",{
//         headers: {
//             Accept: 'application/json',
//         },
//         method: "POST",
//         body: formData

//       }
    
//     ).then( data => data.json() )
//     .then (resposta => { 
//             console.log(resposta); 
//             if (resposta.success == true )
//             {
//               setAvis("Rutina introduit correctament")
//             }
//             else
//             {
//               console.log("S\'ha produit un error")
//               setError(resposta.message)
//             }
//         })

//   }

//   const tornar = (e) => {

//     e.preventDefault();
//     setAfegir(false);

//   }


//   return (
//     <>
//      <div className="py-9 pl-9">
//       <div className="py-9 flex flex-col gap-y-2">
//           <label className="text-gray-600" htmlFor="Title">Titutlo</label>
//           <input
//               type="text"
//               value={formulari.title}
//               name="title"
//               className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
//               onChange={ handleChange}
//           />
//       </div>

//       <div className="w-1/3">
//     <label className="text-gray-600">Descripció</label>
//     <textarea 
//       name="description"
//       value={formulari.description}
//       className="
//         w-full
//         h-32
//         px-4
//         py-3
//         border-2 border-gray-300
//         rounded-sm
//         outline-none
//         focus:border-blue-400
//       "
//       placeholder="Explica en que consiste la rutina"
//       onChange={ handleChange}
//     ></textarea>

//   <label htmlFor="level" className="block mb-2 text-sm text-gray-600 dark:text-white">Selecciona la dificultad</label>
//   <select value={formulari.level} name="level" id="level" onChange={ handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
//     <option defaultValue value="">----</option>
//     <option  value="1">Facil</option>
//     <option value="2">Medio</option>
//     <option value="3">Dificil</option>
//   </select>
//   <span className="flex flex-col gap-y-2">
//           <label className="text-gray-600" htmlFor="Name">Duracion</label>
//           <input
//             type="text"
//             name="duration"
//             value={formulari.duration}
//             onChange={ handleChange}
//             className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
//           />
//   </span>

//   <span className="flex flex-col gap-y-2">
//           <label className="text-gray-600" htmlFor="Name">Grupo Muscular</label>
//           <input
//             type="text"
//             name="muscle_groups"
//             value={formulari.muscle_groups}
//             onChange={ handleChange}
//             className="w-1/3 px-4 py-2 border border-gray-300 outline-none focus:border-gray-400"
//           />
//   </span>

//   <div className="py-9">
//     <button onClick={afegir}  type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
//       Afegir Entrada
//       </button>
//       { error ? (<div className="flex w-full items-center space-x-2 rounded-2xl bg-red-50 px-4 ring-2 ring-red-200 ">{error}</div>) : (<></>)  }
//       { avis ? (<div className="flex w-full items-center space-x-2 rounded-2xl bg-green-50 px-4 ring-2 ring-green-200 ">{avis}</div>) : (<></>)  }
//     </div>
//       </div>
//     </div>
//     </>
//   )
// }





//////////////////////////////////////////////////////////////////



// const [formData, setFormData] = useState({
//   user_id: 1,
//   title: '',
//   description: '',
//   level: 'intermediate',
//   duration: 0,
//   muscle_groups: '',
//   exercises: [],
// });

// const handleExerciseChange = (index, field, value) => {
//   setFormData((prevData) => {
//     const updatedExercises = prevData.exercises.map((exercise, i) => {
//       if (i === index) {
//         return {
//           ...exercise,
//           [field]: value,
//         };
//       }
//       return exercise;
//     });

//     return {
//       ...prevData,
//       exercises: updatedExercises,
//     };
//   });
// };

// const handleAddExercise = () => {
//   setFormData((prevData) => ({
//     ...prevData,
//     exercises: [
//       ...prevData.exercises,
//       {
//         id: prevData.exercises.length + 1,
//         sets: 0,
//         repetitions: 0,
//         rest_time: 0,
//         tips: '',
//       },
//     ],
//   }));
// };

// const handleRemoveExercise = (index) => {
//   setFormData((prevData) => {
//     const updatedExercises = prevData.exercises.filter(
//       (_, i) => i !== index
//     );

//     return {
//       ...prevData,
//       exercises: updatedExercises,
//     };
//   });
// };

// const handleSubmit = (event) => {
//   event.preventDefault();

//   // Realizar la llamada POST a la API con formData

//   // Ejemplo de llamada fetch:
//   fetch('http://127.0.0.1:8000/api/routines', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Procesar la respuesta de la API si es necesario
//       console.log('Respuesta del servidor:', data);
//     })
//     .catch((error) => {
//       console.error('Error al enviar la rutina:', error);
//     });

//   // Limpiar el formulario después de enviar los datos
//   setFormData({
//     user_id: 1,
//     title: '',
//     description: '',
//     level: 'intermediate',
//     duration: 60,
//     muscle_groups: 'quads,triceps',
//     exercises: [],
//   });
// };

// const handleChange = (event) => {
//   const { name, value } = event.target;

//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value,
//   }));
// };

// return (
//   <div>
//     <h1>Create Routine</h1>
//     <form onSubmit={handleSubmit}>
//       <label>
//         User ID:
//         <input
//           type="number"
//           name="user_id"
//           value={formData.user_id}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Title:
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Description:
//         <input
//           type="text"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Level:
//         <select name="level" value={formData.level} onChange={handleChange}>
//           <option value="beginner">Beginner</option>
//           <option value="intermediate">Intermediate</option>
//           <option value="advanced">Advanced</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Duration:
//         <input
//           type="number"
//           name="duration"
//           value={formData.duration}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       <label>
//         Muscle Groups:
//         <input
//           type="text"
//           name="muscle_groups"
//           value={formData.muscle_groups}
//           onChange={handleChange}
//         />
//       </label>
//       <br />
//       {/* Ejercicios */}
//       <h2>Exercises</h2>
//       {formData.exercises.map((exercise, index) => (
//         <div key={index}>
//           <h3>Exercise {index + 1}</h3>
//           <label>
//             Sets:
//             <input
//               type="number"
//               value={exercise.sets}
//               onChange={(event) =>
//                 handleExerciseChange(index, 'sets', event.target.value)
//               }
//             />
//           </label>
//           <br />
//           <label>
//             Repetitions:
//             <input
//               type="number"
//               value={exercise.repetitions}
//               onChange={(event) =>
//                 handleExerciseChange(index, 'repetitions', event.target.value)
//               }
//             />
//           </label>
//           <br />
//           <label>
//             Rest Time:
//             <input
//               type="number"
//               value={exercise.rest_time}
//               onChange={(event) =>
//                 handleExerciseChange(index, 'rest_time', event.target.value)
//               }
//             />
//           </label>
//           <br />
//           <label>
//             Tips:
//             <input
//               type="text"
//               value={exercise.tips}
//               onChange={(event) =>
//                 handleExerciseChange(index, 'tips', event.target.value)
//               }
//             />
//           </label>
//           <br />
//           <button type="button" onClick={() => handleRemoveExercise(index)}>
//             Remove Exercise
//           </button>
//           <hr />
//         </div>
//       ))}
//       <button type="button" onClick={handleAddExercise}>
//         Add Exercise
//       </button>
//       <br />
//       <br />
//       <button type="submit">Create</button>
//     </form>
//   </div>
// );
// };



///////////////////////////////////////////////////////////



const [formData, setFormData] = useState({
  user_id: 0,
  title: '',
  description: '',
  level: 'intermediate',
  duration: 0,
  muscle_groups: '',
  exercises: [],
});

const [exerciseOptions, setExerciseOptions] = useState([]);

useEffect(() => {
  // Obtener los ejercicios existentes de la API
  fetch('http://127.0.0.1:8000/api/exercises')
    .then((response) => response.json())
    .then((data) => {
      setExerciseOptions(data.exercises);
    })
    .catch((error) => {
      console.error('Error al obtener los ejercicios:', error);
    });
}, []);

const handleExerciseChange = (index, propertyName, value) => {
  setFormData((prevData) => {
    const updatedExercises = prevData.exercises.map((exercise, i) => {
      if (i === index) {
        return {
          ...exercise,
          [propertyName]: value,
        };
      }
      return exercise;
    });

    return {
      ...prevData,
      exercises: updatedExercises,
    };
  });
};

const handleAddExercise = () => {
  setFormData((prevData) => ({
    ...prevData,
    exercises: [
      ...prevData.exercises,
      {
        id: '',
        sets: 0,
        repetitions: 0,
        rest_time: 0,
        tips: '',
      },
    ],
  }));
};

const handleRemoveExercise = (index) => {
  setFormData((prevData) => {
    const updatedExercises = prevData.exercises.filter(
      (_, i) => i !== index
    );

    return {
      ...prevData,
      exercises: updatedExercises,
    };
  });
};

const handleSubmit = (event) => {
  event.preventDefault();

  // Realizar la llamada POST a la API con formData

  // Ejemplo de llamada fetch:
  fetch('http://127.0.0.1:8000/api/routines', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Procesar la respuesta de la API si es necesario
      console.log('Respuesta del servidor:', data);
    })
    .catch((error) => {
      console.error('Error al enviar la rutina:', error);
    });

  // Limpiar el formulario después de enviar los datos
  setFormData({
    user_id: 0,
    title: '',
    description: '',
    level: 'intermediate',
    duration: 0,
    muscle_groups: '',
    exercises: [],
  });
};

const handleChange = (event) => {
  const { name, value } = event.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

return (
  <div>
    <h1>Create Routine</h1>
    <form onSubmit={handleSubmit}>
      <label>
        User ID:
        <input
          type="number"
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Level:
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>
      <br />
      <label>
        Duration:
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Muscle Groups:
        <input
          type="text"
          name="muscle_groups"
          value={formData.muscle_groups}
          onChange={handleChange}
        />
      </label>
      <br />
      {/* Ejercicios */}
      <h2>Exercises</h2>
      {formData.exercises.map((exercise, index) => (
        <div key={index}>
          <h3>Exercise {index + 1}</h3>
          <label>
            Exercise:
            <select
              value={exercise.id}
              onChange={(event) =>
                handleExerciseChange(index, 'id', event.target.value)
              }
            >
              <option value="">Select an exercise</option>
              {exerciseOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Sets:
            <input
              type="number"
              value={exercise.sets}
              onChange={(event) =>
                handleExerciseChange(index, 'sets', event.target.value)
              }
            />
          </label>
          <br />
          <label>
            Repetitions:
            <input
              type="number"
              value={exercise.repetitions}
              onChange={(event) =>
                handleExerciseChange(index, 'repetitions', event.target.value)
              }
            />
          </label>
          <br />
          <label>
            Rest Time:
            <input
              type="number"
              value={exercise.rest_time}
              onChange={(event) =>
                handleExerciseChange(index, 'rest_time', event.target.value)
              }
            />
          </label>
          <br />
          <label>
            Tips:
            <input
              type="text"
              value={exercise.tips}
              onChange={(event) =>
                handleExerciseChange(index, 'tips', event.target.value)
              }
            />
          </label>
          <br />
          <button type="button" onClick={() => handleRemoveExercise(index)}>
            Remove Exercise
          </button>
          <hr />
        </div>
      ))}
      <button type="button" onClick={handleAddExercise}>
        Add Exercise
      </button>
      <br />
      <br />
      <button type="submit">Create</button>
    </form>
  </div>
);
};


export default RutinasAdd
