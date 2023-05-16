import React from 'react'
import './Fitcook.css'

const Rutina = ({v}) => {

  console.log(v)
  

return (
  <div key={v.id} className='rutina'>
    <div className="carta-rutina">
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