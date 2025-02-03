import { useState } from "react";

const EditTask = ({ task, updateTask, cancelEdit }) => {
  const [newText, setNewText] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim() === "") return; // Evita di salvare task vuote
    updateTask(task.id, newText); // ⚡️ Aggiorna la task
    cancelEdit(); // Chiude il form di modifica
  };

  return (
    <form onSubmit={handleSubmit} className="edit-task-form">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button className="edit-button" type="submit">✔</button>
      <button className="delete-button" type="button" onClick={cancelEdit}>❌</button>
    </form>
  );
};

export default EditTask;
