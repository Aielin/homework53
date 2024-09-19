import React from "react";
import Task from "./Task.tsx";

interface TaskListProps {
    tasks:{id:string; text:string; isCompleted:boolean}[];
    onDeleteTask: (id:string) => void;
    onToggleCompleteTask: (id:string) => void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, onDeleteTask, onToggleCompleteTask}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    text={task.text}
                    isCompleted={task.isCompleted}
                    onDelete={() => onDeleteTask (task.id)}
                    onToggleComplete={() => onToggleCompleteTask (task.id)}
                />
            ))}
        </ul>
    );
};

export default TaskList;