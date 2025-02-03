import { useState } from "react";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import "./TaskCard.css";

export const TaskCard = ({ taskName, userName, initialCompleted = false, onToggle }) => {
    const [isCompleted, setIsCompleted] = useState(initialCompleted);

    const toggleTask = () => {
        const newState = !isCompleted;
        setIsCompleted(newState);
        if (onToggle) {
            onToggle(newState); 
        }
    };

    return (
        <div className={`task-card-box ${isCompleted ? "completed" : ""}`}>
            <div className="task-card-text">
                <p>{taskName}</p>
                <p>Assigned to {userName}</p>
            </div>
            <ButtonComponent 
                onClick={toggleTask} 
                label={isCompleted ? "✖" : "✔"} 
                className={isCompleted ? "btn-red" : "btn-green"} 
            />
        </div>
    );
};