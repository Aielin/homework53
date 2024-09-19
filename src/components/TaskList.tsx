import React from "react";
import Task from "./Task.tsx";

interface TaskListProps {
    tasks:{id:string; text:string}[];
    onDeleteTask: (id:string) => void;
}

const TaskList: React.FC<TaskListProps> = ({tasks, onDeleteTask}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task key={task.id} text={task.text} onDelete={() => onDeleteTask (task.id)} />
            ))}
        </ul>
    );
};

export default TaskList;