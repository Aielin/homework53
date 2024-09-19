import React, {useState} from "react";

interface AddTaskFormProps {
    onAddTask: (task: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
    const [task, setTask] = useState<string>('');

    const handleAddTask = () => {
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return (
        <div>
            <input type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add new task" className="task-input"
            />
            <button onClick={handleAddTask}>Add task</button>
        </div>
    );
};

export default AddTaskForm;