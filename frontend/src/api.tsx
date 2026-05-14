import { useState } from 'react';

interface Resultado {
  code: number;
  message: string;
  time: string;
  data: {
    run_consultado: string;
    dv_consultado: string;
    cuidador: number;
    fecha_de_cierre: string;
  };
}

function App() {
  const [rut, setRut] = useState('');
  const [resultado, setResultado] = useState<Resultado | null>(null);

  const obtenerResultado = async () => {
    try {
      const respuesta = await fetch(`http://servicios.junaeb.cl/apiv1/servicios/canales-atencion/persona-cuidadora/${rut}`,{ mode: 'no-cors' });
      const datos = await respuesta.json();
      setResultado(datos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        placeholder="Ingresar rut"
      />
      <button onClick={obtenerResultado}>Buscar</button>
      {resultado !== null && resultado.data !== undefined && (
        <div>
          <p>Resultado:</p>
          <p>Código: {resultado.code}</p>
          <p>Mensaje: {resultado.message}</p>
          <p>Fecha de cierre: {resultado.time}</p>
          <p>Rut consultado: {resultado.data.run_consultado}</p>
          <p>DV consultado: {resultado.data.dv_consultado}</p>
          <p>Cuidador: {resultado.data.cuidador === 0 ? 'No' : 'Sí'}</p>
        </div>
      )}
    </div>
  );
}


export default App;