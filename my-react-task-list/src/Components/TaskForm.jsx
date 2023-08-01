import React, {useState} from "react";

const TaskForm = ({ addTask}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if(name.trim().length <3){
            alert('El nombre debe tener al menos 3 caracteres');
        }

        addTask(name, description);
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskName">Nombre de la tarea:</label>
        <input
          type="text"
          id="taskName"
          value={name}
          onChange={handleNameChange}
          placeholder="Ingrese el nombre de la tarea"
        />
      </div>
      <div>
        <label htmlFor="taskDescription">Descripción de la tarea:</label>
        <input
          type="text"
          id="taskDescription"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Ingrese la descripción de la tarea"
        />
      </div>
      <button type="submit">Agregar tarea</button>
    </form>
    )
} 