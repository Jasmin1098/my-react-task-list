import React from 'react';

const Task = ({nombre, completado}) => {
    return (
        <div>
            <span>{nombre}</span>
            <input type = "checkbox" checked={completado} readOnly/>
        </div>
    );
};

export default Task;