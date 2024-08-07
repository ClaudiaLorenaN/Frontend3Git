/*import { useState } from 'react'
import Button from "./Componentes/Button";

function App() {
  const [tasks, setTask] = useState([]);
  console.log(tasks);
  
  return (
    <>
    <div>
    <Button onClick={() => setTask([...tarea, tareas])}>Sacar la mascota</Button>
    <Button onClick={() => setTask([...tarea, tareas])}>Limpiar la casa</Button>
    <Button onClick={() => setTask([...tarea, tareas])}>Hacer la cena</Button>

    </div>
     
    </>
  )
}

export default App;*/

import React from "react";
import Card from "./Componentes/Card";
import { useState } from "react";

let list = [
  {
    id: 1,
    nombre: "Sacar la mascota",
    img: "https://img.freepik.com/vector-premium/nina-esta-sacando-pasear-su-perro-mascota_118167-4187.jpg?w=740"
  },
  {
    id: 2,
    nombre: "Limpiar la casa",
    img: "https://scontent.feoh13-1.fna.fbcdn.net/v/t39.30808-6/301158928_505632838233466_4390569558856717852_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHd8AuXx9OEjru1mmo77EzZGsDElQ1TGIoawMSVDVMYimK2UA0SpD0rM-FKSjUQS0bHd5fM-4ya2tBNt_FwZAt4&_nc_ohc=XlMh2L1LQMIQ7kNvgEPnNgU&_nc_ht=scontent.feoh13-1.fna&oh=00_AYCV7I2lvlILNC-mvb9PCuzg346_je68sLnQYfh3mxWkYg&oe=66B95520"
  },
  {
    id: 3,
    nombre: "Hacer la cena",
    img: "https://img.freepik.com/vector-premium/chef-cocinando-cena-mesa-cocina-concepto-personaje-dibujos-animados-preparando-comidas-casa-estilo-plano-ilustracion_90220-39.jpg?w=826"
  },
];

const Home = () => {
  const [task, setTask] = useState([]);
  console.log(task);
  return (
    <>
      <div>
        <h2>Tareas agregadas</h2>
        <ul>
          {task.map((tarea) => (
            <li key={tarea.id}>{tarea.nombre}</li>
          ))}
        </ul>
        <h1>Lista de tareas</h1>
      </div>
      <div>
        {list.map((tarea) => (
          <Card key={tarea.id} conjuntoTareas={tarea} task={task} setTask={setTask} />
        ))}
      </div>
    </>
  );
};

export default Home;
