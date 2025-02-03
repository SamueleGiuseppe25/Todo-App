import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTask(task);
    setTask(""); // Clear input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-button" type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
