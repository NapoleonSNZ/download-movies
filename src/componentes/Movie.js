import React from "react";

function Movie(){
  return(
    <div className='contenedor-movie'>
      <img 
        className='imagen-movie' 
        src={require('../img/movie-sonic.jpg')}
        alt='SonicMovie'/>
    </div>
  );  
}