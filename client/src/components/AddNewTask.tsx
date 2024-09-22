import React, { useState } from 'react';

interface AddNewTaskProps {
  onAddTask: (content: string) => void;
}

const AddNewTask: React.FC<AddNewTaskProps> = ({ onAddTask }) => {
  const [taskContent, setTaskContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskContent.trim()) {
      onAddTask(taskContent);
      setTaskContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-new-task">
      <input
        type="text"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        placeholder="new task"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default AddNewTask;
