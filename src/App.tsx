import { useState } from 'react'
import './App.css'
import AddTaskForm from "./components/AddTaskForm.tsx";
import TaskList from "./components/TaskList.tsx";

interface Task {
    id: string;
    text: string;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
      { id:'1', text:'Buy water'},
      { id:'2', text:'Wash cat'},
      { id:'3', text:'Do homework'}
  ]);

  const addTask = (newTaskText: string) => {
      const newTask: Task = {
          id: Date.now().toString(),
          text: newTaskText,
      };
      setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
      <div>
          <h1>ToDo list</h1>
          <AddTaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
  );
}

export default App
