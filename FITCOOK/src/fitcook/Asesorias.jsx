import React from 'react';
import './Fitcook.css'

function Asesorias() {
  return (
    <div className='asesorias'>
      <div className='abanner'>
        {/* <img className='imagen' src='https://corbachofit.com/wp-content/uploads/2023/02/corbacho-principal-1.png'></img> */}
        <div className='texto'>
          <p>Banner</p>
        </div>
      </div>
      <div className='acontainers'>
            <div>
                <div className='aimagen'>IMAGEN</div>
                <div><p>Asesoria entrenamiento</p></div>
                <div className='edesc'><p>dwdwdwda</p></div>
            </div>
            <div>
                <div className='aimagen'>IMAGEN</div>
                <div><p>Asesoria nutricion</p></div>
                <div className='ndesc'><p>dwdwdwda</p></div>
            </div>
            <div>
                <div className='aimagen'>IMAGEN</div>
                <div><p>Asesoria entrenamiento y nutricion</p></div>
                <div className='endesc'><p>dwdwdwda</p></div>
            </div>
      </div>
    </div>
  );
}

export default Asesorias;