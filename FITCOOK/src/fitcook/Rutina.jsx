import React from 'react'
import './Fitcook.css'

const Rutina = ({v}) => {

  console.log(v)

  let dificultad = '';

  if (v.level === '1') {
    dificultad = 'carta-rutina-facil';
  } else if (v.level === '2') {
    dificultad = 'carta-rutina-medio';
  } else if (v.level === '3'){
    dificultad = 'carta-rutina-dificil';
  } else {
    dificultad = '';
  }
  

return (
  <div key={v.id} className='rutina'>
    <div className={dificultad}>
      <div className="space-y-2">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-cyan-900">{v.title}</h4>
          <p>{v.description}</p>
          <p>{v.duration}</p>
          <p>{v.muscle_groups}</p>
        </div>
      </div>
    </div>
  </div>
)
}

export default Rutina