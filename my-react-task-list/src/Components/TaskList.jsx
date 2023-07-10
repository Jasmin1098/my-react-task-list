import React from 'react';
import Task from './Task';
import { useState,useEffect } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect (() => {
        const taskGuardadas = Object.keys(localStorage).filter((key) => key.startsWith('task_'));
        const taskCargadas = taskGuardadas.map((key) => JSON.parse(localStorage.getItem(key)));
        setTasks(taskCargadas);
    }, []);

    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                 <Task id={`task_${index}`} descripcion={task.descripcion} completado={task.completado}/>
                </li>
            ))}
            <li> Completar actividades pendientes</li>
            <li>Ver videos de la plataforma</li>
            <li>Agregar cambios al codigo</li>
            <li>Leer documentación complementaria</li> 
        </ul>

    );
};

export default TaskList;