import "./ProgressBar.css";

export const ProgressBar = ({ completedTasks, totalTasks }) => {
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    const progressBarColor = progress === 100? "green" : "#40c2ee";

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ 
                width: `${progress}%` ,
                backgroundColor: progressBarColor
            }}>
                <span className="progress-text">
                    {Math.round(progress)}%
                </span>
            </div>
        </div>
    )
}
