import { useState } from 'react';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { useTasks } from './hooks/useTasks';
import './styles/App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const { tasks, addTask, toggleTask, deleteTask, updateTask } = useTasks();

  const handleAddTask = (name, frequency) => {
    addTask(name, frequency);
    setShowForm(false);
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>🏠 Home Task</h1>
        <p className="subtitle">Gestionnaire de tâches ménagères récurrentes</p>
        {totalCount > 0 && (
          <div className="progress">
            <span>{completedCount} / {totalCount} tâches complétées</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        )}
      </header>

      <main className="app-main">
        <div className="add-task-section">
          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)} 
              className="btn btn-add"
            >
              ➕ Ajouter une tâche
            </button>
          ) : (
            <TaskForm 
              onSubmit={handleAddTask}
              onCancel={() => setShowForm(false)}
            />
          )}
        </div>

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </main>
    </div>
  );
}

export default App;
