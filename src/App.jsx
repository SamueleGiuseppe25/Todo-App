import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskCounter from "./components/TaskCounter";
import TaskFilter from "./components/TaskFilter";
import { Analytics } from "@vercel/analytics/react"
import "./style.css";

function App() {
  // 🔹 **Recupera i dati salvati in localStorage al caricamento della pagina**
  const getSavedTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  };

  const [tasks, setTasks] = useState(getSavedTasks()); // ✅ Usa i dati salvati come valore iniziale
  const [filter, setFilter] = useState("all");

  // 🔹 **Salva le task in localStorage ogni volta che cambiano**
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // ✅ Si aggiorna ogni volta che `tasks` cambia

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    ));
  };

  const getFilteredTasks = () => {
    if (filter === "active") {
      return tasks.filter(task => !task.completed);
    } else if (filter === "completed") {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  const clearTasks = () => {
    setTasks([]); // Cancella tutte le task
    localStorage.removeItem("tasks"); // Rimuove le task salvate da localStorage
  };
  

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <TaskCounter tasks={tasks} />
      <TaskFilter filter={filter} setFilter={setFilter} clearTasks={clearTasks} />
      <TodoForm addTask={addTask} />
      <TodoList tasks={getFilteredTasks()} toggleComplete={toggleComplete} deleteTask={deleteTask} updateTask={updateTask} />
      <Analytics />
    </div>
  );
}

export default App;
