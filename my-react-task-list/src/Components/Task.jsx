import React from 'react';
import { useState, useEffect } from 'react';

const Task = ({task, onDelete, onUpdate}) => {
    const {id, description, completado} = task;

    const handleCheckboxChange = () => {
        onUpdate(id, {completado: !completado});
    };

    return (
        <div>
            <span>{description}</span>
           <input type="checkbox" checked={completado} onChange={handleCheckboxChange}/>
           <button onClick={() => onDelete(id)}>Eliminar Tarea</button>
        </div>
    );
};

export default Task;