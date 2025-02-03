const TaskCounter = ({ tasks }) => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
  
    return (
      <div className="task-counter">
        <p>✔ Completed: {completedTasks} / 📋 Total: {totalTasks}</p>
      </div>
    );
  };
  
  export default TaskCounter;
  