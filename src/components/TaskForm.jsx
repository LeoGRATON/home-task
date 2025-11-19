import { useState } from 'react';

export const TaskForm = ({ onSubmit, onCancel, initialTask = null }) => {
  const [name, setName] = useState(initialTask?.name || '');
  const [frequency, setFrequency] = useState(initialTask?.frequency || 'weekly');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim(), frequency);
      setName('');
      setFrequency('weekly');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom de la tâche"
        className="task-input"
        autoFocus
      />
      <select 
        value={frequency} 
        onChange={(e) => setFrequency(e.target.value)}
        className="task-select"
      >
        <option value="weekly">Hebdomadaire</option>
        <option value="biweekly">Bihebdomadaire</option>
        <option value="monthly">Mensuel</option>
      </select>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {initialTask ? 'Modifier' : 'Ajouter'}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn btn-secondary">
            Annuler
          </button>
        )}
      </div>
    </form>
  );
};
