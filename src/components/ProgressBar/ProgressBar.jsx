import "./ProgressBar.css";

export const ProgressBar = ({ completedTasks, totalTasks }) => {
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
            </div>
            <p className="progress-text">{completedTasks} / {totalTasks}</p>

        </div>
    )
}