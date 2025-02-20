
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./CardContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";

export const ExampleTaskBoard = () => {
    const initialTasks = [
        { taskName: "Fregar el suelo", userName: "Vicente", completed: false},
        { taskName: "Cambiar Arenero", userName: "Esther", completed: false},
        { taskName: "Limpiar Cocina", userName: "Vicente", completed: false},
        { taskName: "Quitar polvo comedor", userName: "Esther", completed: false},
        { taskName: "Poner lavadora", userName: "Vicente", completed: false},
        { taskName: "Lavar los platos", userName: "Vicente", completed: false},
    ];

    const [tasks, setTasks] = useState(initialTasks);

    const handleToggleTask = (index, newState) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = newState;
        setTasks(updatedTasks)
    };

    const completedTasks = tasks.filter(task => task.completed).length;


    return (
        <div>
            <Link to="/">
                <button>Go Back Home</button>
            </Link>
            <ProgressBar completedTasks={completedTasks} totalTasks={tasks.length} />
            <CardContainer tasks={tasks} familyName={"Poteto"} onToggleTask={handleToggleTask}/>
        </div>
    );
};