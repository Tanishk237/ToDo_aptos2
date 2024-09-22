import React from 'react';

interface TaskProps {
  task: {
    id: string;
    content: string;
    completed: boolean;
  };
  onToggle: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggle }) => {
  return (
    <div className="task">
      <span>{task.content}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
    </div>
  );
};

export default Task; 