import { useState } from 'react'
import './App.css'
import AddTaskForm from "./components/AddTaskForm.tsx";
import TaskList from "./components/TaskList.tsx";

interface Task {
    id: string;
    text: string;
    isCompleted: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
      { id:'1', text:'Buy water', isCompleted: false},
      { id:'2', text:'Wash cat', isCompleted: false},
      { id:'3', text:'Do homework', isCompleted: false},
  ]);

  const addTask = (newTaskText: string) => {
      const newTask: Task = {
          id: Date.now().toString(),
          text: newTaskText,
          isCompleted: false,
      };
      setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleCompleteTask = (taskId: string) => {
      setTasks(tasks.map(task => task.id === taskId ? {...task, isCompleted: !task.isCompleted} : task));
  };

  return (
      <div>
          <h1>ToDo list</h1>
          <AddTaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleCompleteTask={toggleCompleteTask} />
      </div>
  );
}

export default App
