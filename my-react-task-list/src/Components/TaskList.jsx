import React from 'react';
import Task from './Task';
import useTaskManager from './TaskManager';

const TaskList = () => {
    const { tasks,crearTarea, borrarTarea, actualizarTarea } = useTaskManager();
    const [newTaskDescription, setNewTaskDescription] = React.useState('');
    
   const handleNewTaskChange = (event) =>{
    setNewTaskDescription(event.target.value);
   };

   const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    if (newTaskDescription.trim() !== '') {
      crearTarea(newTaskDescription);
      setNewTaskDescription('');
    }
  };

    return (
        <div>
        <ul>
            {tasks.map((task, index) => (
                <li key={task.id}>
                 <Task 
                 id={`task_${index}`}
                 description={task.description}
                 completado={task.completado}
                 task={task}
                 onDelete={borrarTarea}
                 onUpdate={actualizarTarea}
                 />
                </li>
            ))} 
        </ul>
        <form onSubmit={handleNewTaskSubmit}>
            <input 
                type="text"
                value={newTaskDescription}
                onChange={handleNewTaskChange}
                placeholder="Escriba una nueva tarea"
            />
            <button type="submit">Agregar tarea</button>
            </form>
        </div>
    );
};

export default TaskList;