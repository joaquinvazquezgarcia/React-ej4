import React, { useState } from "react";
import "./lista.css";

export function Lista() {
    const [tareas, setTareas] = useState([]);

    const agregarItem = valorInput => {
        setTareas([...tareas, { titulo: valorInput }]);
    };

    const eliminarItem = titulo => {
        setTareas(tareas.filter(tarea => tarea.titulo !== titulo));
    };

    const handleKeyDown = event => {
        if (event.key === "Enter") {
            const valorInput = event.target.value;
            if (valorInput.trim() !== "") {
                agregarItem(valorInput);
                event.target.value = "";
            }
        }
    };

    return (
        <div className="list">
            <h1>Bienvenido</h1>
            <h2>Ingresa tus tareas</h2>
            <input
                type="text"
                placeholder="Tarea 1..."
                onKeyDown={handleKeyDown}
            />
            {tareas.map((tarea, index) => {
                return (
                    <ItemLista
                        tarea={tarea}
                        key={index}
                        onDelete={eliminarItem}
                    />
                );
            })}
        </div>
    );
}

function ItemLista({ tarea, onDelete }) {
    const eliminarItem = () => {
        onDelete(tarea.titulo);
    };
    return (
        <div className="listItem">
            <h3>{tarea.titulo}</h3>
            <button onClick={eliminarItem}>X</button>
        </div>
    );
}
