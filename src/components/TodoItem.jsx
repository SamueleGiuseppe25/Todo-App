import { useState } from "react";
import EditTask from "./EditTask";

const TodoItem = ({ task, toggleComplete, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="todo-item">
      {isEditing ? (
        <EditTask
          task={task}
          updateTask={updateTask}
          cancelEdit={() => setIsEditing(false)}
        />
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button className="edit-button" onClick={() => setIsEditing(true)}>✏</button>
          <button className="delete-button" onClick={() => deleteTask(task.id)}>❌</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
