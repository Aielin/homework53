import React from "react";
import Task from "./Task.tsx";

interface TaskListProps {
    tasks:{id:string; text:string}[];
}

const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <Task key={task.id} text={task.text} />
            ))}
        </ul>
    );
};

export default TaskList;