import React, { useState } from 'react';
import AddNewTask from './AddNewTask';
import Task from './Task';

interface TodoListProps {
  listId: string;
}

interface TaskType {
  id: string;
  content: string;
  completed: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ listId }) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const addTask = (content: string) => {
    const newTask: TaskType = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-list">
      <h1>Our todolist</h1>
      <p>List ID: {listId}</p>
      <AddNewTask onAddTask={addTask} />
      <div className="tasks">
        {tasks.map(task => (
          <Task key={task.id} task={task} onToggle={() => toggleTask(task.id)} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;