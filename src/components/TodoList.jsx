import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask, updateTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          updateTask={updateTask} /* ✅ Passa updateTask */
        />
      ))}
    </div>
  );
};

export default TodoList;
