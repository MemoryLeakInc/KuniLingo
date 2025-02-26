
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./CardContainer";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import "./ExampleTaskBoard.css"

export const ExampleTaskBoard = () => {
    const initialTasks = [
        { taskId: 1, taskName: "Fregar el suelo", userName: "Vicente", completed: false },
        { taskId: 2, taskName: "Cambiar Arenero", userName: "Esther", completed: false },
        { taskId: 3, taskName: "Limpiar Cocina", userName: "Vicente", completed: false },
        { taskId: 4, taskName: "Quitar polvo comedor", userName: "Esther", completed: false },
        { taskId: 5, taskName: "Poner lavadora", userName: "Vicente", completed: false },
        { taskId: 6, taskName: "Lavar los platos", userName: "Vicente", completed: false },
    ];
    

    const [tasks, setTasks] = useState(initialTasks);

    const handleToggleTask = (taskId, newState) => {
        const updatedTasks = tasks.map(task =>
            task.taskId === taskId ? { ...task, completed: newState } : task
        );
        setTasks(updatedTasks)
    };

    const completedTasks = tasks.filter(task => task.completed).length;

    const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);


    return (
        <div>
            <Link to="/">
                <button>Go Back Home</button>
            </Link>
            <ProgressBar completedTasks={completedTasks} totalTasks={tasks.length} />
            <CardContainer tasks={sortedTasks} familyName={"Poteto"} onToggleTask={handleToggleTask}/>
        </div>
    );
};