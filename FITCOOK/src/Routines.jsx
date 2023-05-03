import React, { useState, useEffect } from 'react';

function Routines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/exercises')
      .then(response => response.json())
      .then(data => setRoutines(data.routines))
      .catch(error => console.log(error));
  }, []);
  

  return (
    <div>
      <h1>Routines</h1>
      <ul>
        {routines.map(routine => (
          <li key={routine.id}>
            <h2>{routine.title}</h2>
            <p>{routine.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Routines;
