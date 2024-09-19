import React from "react";

interface TaskProps {
    text: string;
    onDelete:()=>void;
}

const Task: React.FC<TaskProps> = ({ text, onDelete }) => {
    return (
        <li>
            {text}
            <button onClick={onDelete}>Delete</button>
        </li>
    );
};


export default Task;