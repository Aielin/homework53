import React from "react";

interface TaskProps {
    text: string;
    onDelete:()=>void;
    onToggleComplete:()=>void;
    isCompleted:boolean;
}

const Task: React.FC<TaskProps> = ({ text, onDelete, isCompleted, onToggleComplete }) => {
    return (
        <li>
            <input type="checkbox" checked={isCompleted} onChange={onToggleComplete} />
            <span style={{textDecoration: isCompleted ? 'line-through' : 'none'} }>{text}</span>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};


export default Task;