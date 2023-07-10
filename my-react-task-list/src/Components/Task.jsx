import React from 'react';
import { useState, useEffect } from 'react';

const Task = ({id, descripcion}) => {
    const [completado, setCompletado] = useState(false);

    const cambioCheck = () => {
        setCompletado(!completado)
    };

    useEffect(() => {
        localStorage.setItem(`task_${id}`, JSON.stringify({completado, descripcion}));
    }, [id, completado, descripcion]);

    return (
        <div>
            <span>{descripcion}</span>
           <input type="checkbox" checked={completado} onChange={cambioCheck}/>
        </div>
    );
};

export default Task;