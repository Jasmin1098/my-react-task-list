import { useState } from 'react'
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import Task from './Components/Task';
import './App.css'


function App() {
  const [lista, setLista] = useState([]);

  const [tarea, setTarea] = useState('');

  const addTarea = () => {
  setLista([...lista,tarea])
  setTarea('')
  }

  return (
    <>
      <div>
          <Header titulo = "Lista de Tareas"/>
          <TaskList>
            <Task nombre="Completar actividades pendientes" completado={true}/>
            <Task nombre="Ver videos de la plataforma" completado={true}/>
            <Task nombre="Agregar cambios al codigo" completado={false}/>
            <Task nombre="Leer documentación complementaria" completado={false}/>
          </TaskList>
      </div>
    </>
  );
};

export default App;
