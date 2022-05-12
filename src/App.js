
import './App.css';
import Movie from './componentes/Movie';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>DESCARGAS ESTRENOS 2022 </h1>
      <Movie 
        nombre='Sonic 2: La Película'
        ano='2022'
        actor='Jim Carey'
        imagen='sonic'
        link='https://www.mediafire.com/file/eux0ocapmxtd73a/STH2720.zip'
        descripcion='Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones, pero Sonic no esta solo lo ayudara Tails.'
      />
      <Movie 
        nombre='The Batman'
        ano='2022'
        actor=' Robert Pattinson, Zoë Kravitz'
        imagen='batman'
        link='https://www.mediafire.com/file/j1r0j41pplv3pms/g4t0nbwn2k22.exe'
        descripcion='
        Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, un rastro envía Batman a una investigación. A medida que las pruebas comienzan a acercarse a su casa, Batman debe desenmascarar al culpable y hacer justicia a la corrupción en Gotham City.'
      />
      <Movie 
        nombre='Metal Lords'
        ano='2022'
        actor='Jaeden Martell, Adrian Greensmith, Isis Hainsworth'
        imagen='metal'
        link='https://www.mediafire.com/file/tehw6hn7daemxyb/g4t0mtlrds.rar'
        descripcion='Metal Lords 2022 Mega. Para los inadaptados adolescentes Hunter y Kevin, el camino a la gloria es claro: dedicarse al metal. Gana la Batalla de las Bandas. y ser adorados como dioses.'
      />
      </div>
    </div>
  );
}

export default App;
