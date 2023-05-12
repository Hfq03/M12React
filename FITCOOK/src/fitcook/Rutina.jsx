import React from 'react'

const Rutina = ({v}) => {

  console.log(v)
  

  return (
    <div key={v.id} className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <div className="sm:w-7/12 pl-0 p-5">
            <div className="space-y-2">
              <div className="space-y-4">
                <h4 className="text-2xl font-semibold text-cyan-900">{v.title}</h4>
                <p className="text-gray-600">{v.description}</p>
              </div>
            </div>
          </div>
          <a href="#" className=" w-max text-cyan-600" onClick={ (e)=> deletePlace(v.id,e) }> Esborrar</a>
          <span className="text-sm text-gray-900 font-light px-0 py-1 whitespace-nowrap">
              
              </span>
        </div>
  )
}

export default Rutina