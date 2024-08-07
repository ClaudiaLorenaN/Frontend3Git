/*import React from "react";
import Card from "./Card";

let list = [
  {
    id: 1,
    nombre: "Sacar la mascota",
  },
  {
    id: 2,
    nombre: "Limpiar la casa",
  },
  {
    id: 3,
    nombre: "Hacer la cena",
  },
];

const Home = () => {
  const [task, setTask] = useState([]);
  console.log(task);
  return (
    <>
      <div>
        <h2>Tareas</h2>
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

export default Home;*/
