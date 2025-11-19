import { useState } from 'react';
import { TaskForm } from './TaskForm';

export const TaskItem = ({ task, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (name, frequency) => {
    onUpdate(task.id, name, frequency);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <TaskForm
          onSubmit={handleUpdate}
          onCancel={() => setIsEditing(false)}
          initialTask={task}
        />
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-name">{task.name}</span>
      </label>
      <div className="task-actions">
        <button 
          onClick={() => setIsEditing(true)} 
          className="btn-icon"
          title="Modifier"
        >
          ✏️
        </button>
        <button 
          onClick={() => onDelete(task.id)} 
          className="btn-icon"
          title="Supprimer"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};
