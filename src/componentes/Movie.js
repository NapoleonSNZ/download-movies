import React from 'react';
import '../stylesheets/Movie.css';

 function Movie(props){
  return(
    <div className='contenedor-movie'>
      <img 
        className='imagen-movie' 
        src={require(`../img/movie-${props.imagen}.jpg`)}
        alt='SonicMovie'/>
      <div className='contenedor-texto-movie'>
        <p className='nombre-movie'>{props.nombre} {props.ano}</p>
        <p className='elenco-movie'>{props.actor}</p>
        <a href={`${props.link}`} rel="noreferrer" target={'_blank' } className='link-movie'>DESCARGA AQUI!!!</a>
        <p className='texto-movie'>{props.descripcion} </p>
      </div>
    </div>
  );  
}

//exportacion Nombrada o por Defecto
    //exportación por defecto
export default Movie;