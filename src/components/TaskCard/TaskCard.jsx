import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import "./TaskCard.css";

export const TaskCard = ({ taskId, taskName, userName, initialCompleted = false, onToggle }) => {
    const { t } = useTranslation()
    const [isCompleted, setIsCompleted] = useState(initialCompleted);

    const toggleTask = () => {
        const newState = !isCompleted;
        setIsCompleted(newState);
        if (onToggle) {
            onToggle(taskId, newState); 
        }
    };

    return (
        <div className={`task-card-box ${isCompleted ? "completed" : ""}`}>
            <div className="task-card-text">
                <p>{taskName}</p>
                <p>{t(`exampleView.taskCard.assignedToText`)} {userName}</p>
            </div>
            <ButtonComponent 
                onClick={toggleTask} 
                label={isCompleted ? "✔" : " "}
                className={isCompleted ? "btn-red" : "btn-green"} 
            />
        </div>
    );
};