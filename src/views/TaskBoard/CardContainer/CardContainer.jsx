import { TaskCard } from "../../../../src/components/TaskCard/TaskCard";
import "./CardContainer.css";

export const CardContainer = ({ tasks, familyName, onToggleTask }) => {
    return (
        <div className="card-container">
            {familyName && <h2>{familyName} family</h2>}
            {tasks.map((task, index) => {
                return(

                    <TaskCard
                        key={index}
                        taskName={task.taskName}
                        userName={task.userName}
                        initialCompleted={task.completed} // cambiar luego
                        onToggle={(newState) => onToggleTask(index, newState)}
                    />
                );
            })}
        </div>
    );
};