const TaskFilter = ({ filter, setFilter, clearTasks }) => {
  return (
    <div className="task-filter">
      <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
      <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Active</button>
      <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
      <button className="clear-button" onClick={clearTasks}>🗑 Delete All</button> {/* ✅ Ora clearTasks funziona */}
    </div>
  );
};

export default TaskFilter;
