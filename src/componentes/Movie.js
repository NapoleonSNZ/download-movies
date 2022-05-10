import React from 'react';

export function Movie(){
  return(
    <div className='contenedor-movie'>
      <img 
        className='imagen-movie' 
        src={require('../img/movie-sonic.jpg')}
        alt='SonicMovie'/>
      <div className='contenedor-texto-movie'>
        <p className='nombre-movie'>Sonic 2: La Película / Sonic the Hedgehog 2</p>
        <p className='elenco-movie'>Jim Carey</p>
        <p className='genero-movie'>Accion, Comedia</p>
        <p className='texto-movie'>Después de establecerse en Green Hills, Sonic se muere por
         demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo
          compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir 
          civilizaciones, pero Sonic no esta solo lo ayudara Tails.
        </p>
      </div>
    </div>
  );  
}

//exportacion Nombrada o por Defecto
    //exportación por defecto
export default Movie;