import React from "react";

interface TaskProps {
    text: string;
}

const Task: React.FC<TaskProps> = ({ text }) => {
    return <li>{text}</li>;
};


export default Task;