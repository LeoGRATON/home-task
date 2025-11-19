import { TaskItem } from './TaskItem';

const frequencyLabels = {
  weekly: 'Hebdomadaires',
  biweekly: 'Bihebdomadaires',
  monthly: 'Mensuelles'
};

export const TaskList = ({ tasks, onToggle, onDelete, onUpdate }) => {
  const tasksByFrequency = {
    weekly: tasks.filter(t => t.frequency === 'weekly'),
    biweekly: tasks.filter(t => t.frequency === 'biweekly'),
    monthly: tasks.filter(t => t.frequency === 'monthly')
  };

  return (
    <div className="task-list">
      {Object.entries(tasksByFrequency).map(([frequency, freqTasks]) => (
        freqTasks.length > 0 && (
          <div key={frequency} className="task-section">
            <h2 className="section-title">{frequencyLabels[frequency]}</h2>
            <div className="tasks">
              {freqTasks.map(task => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={onToggle}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))}
            </div>
          </div>
        )
      ))}
      {tasks.length === 0 && (
        <p className="empty-state">Aucune tâche pour le moment. Ajoutez-en une ! 🏠</p>
      )}
    </div>
  );
};
