import { useState, useEffect } from 'react';

const STORAGE_KEY = 'home-tasks';

const shouldResetTask = (task) => {
  if (!task.lastReset) return true;

  const lastResetDate = new Date(task.lastReset);
  const now = new Date();
  const daysSinceReset = Math.floor((now - lastResetDate) / (1000 * 60 * 60 * 24));

  switch (task.frequency) {
    case 'weekly':
      return daysSinceReset >= 7;
    case 'biweekly':
      return daysSinceReset >= 14;
    case 'monthly':
      return lastResetDate.getMonth() !== now.getMonth() || 
             lastResetDate.getFullYear() !== now.getFullYear();
    default:
      return false;
  }
};

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsedTasks = JSON.parse(stored);
      // Vérifier et réinitialiser les tâches si nécessaire
      return parsedTasks.map(task => {
        if (shouldResetTask(task)) {
          return {
            ...task,
            completed: false,
            lastReset: new Date().toISOString()
          };
        }
        return task;
      });
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, frequency) => {
    const newTask = {
      id: Date.now(),
      name,
      frequency,
      completed: false,
      lastReset: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, name, frequency) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, name, frequency } : task
    ));
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    updateTask
  };
};
