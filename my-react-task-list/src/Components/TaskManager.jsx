import { useState, useEffect } from 'react';
const useTaskManager = () => {
    const [tasks, setTasks] = useState([]);

useEffect (() => {
    const taskGuardadas = Object.keys(localStorage).filter((key) => key.startsWith('task_'));
    const taskCargadas = taskGuardadas.map((key) => JSON.parse(localStorage.getItem(key)));
    setTasks(taskCargadas);
}, []);

const crearTarea = (description) => {
    const newTask = {
        id: `task_${tasks.length}`,
        description,
        completado: false,
    };
    setTasks([...tasks, newTask]);
};

const borrarTarea = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

const actualizarTarea = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  useEffect(() => {
    tasks.forEach((task) => 
    localStorage.setItem(`task_${task.id}`, JSON.stringify(task))
    );
  }, [tasks]);

  return { tasks, crearTarea, borrarTarea, actualizarTarea };
};

export default useTaskManager;