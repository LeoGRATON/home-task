# 🏠 Home Task

Application de gestion de tâches ménagères récurrentes développée en React.

## 🎯 Fonctionnalités

- ✅ Ajouter, modifier et supprimer des tâches
- 📅 Gestion de trois fréquences de récurrence :
  - **Hebdomadaire** : réinitialisation tous les 7 jours
  - **Bihebdomadaire** : réinitialisation tous les 14 jours
  - **Mensuelle** : réinitialisation chaque mois
- 💾 Sauvegarde automatique dans le localStorage
- 🔄 Réinitialisation automatique des tâches selon leur fréquence
- 📊 Barre de progression pour suivre l'avancement
- 🎨 Interface moderne et responsive

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/TON_USERNAME/home-task.git

# Aller dans le dossier
cd home-task

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm run dev
```

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **CSS vanilla** - Styling

## 📱 Structure du projet

```
home-task/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx      # Formulaire d'ajout/modification
│   │   ├── TaskItem.jsx      # Affichage d'une tâche
│   │   └── TaskList.jsx      # Liste des tâches groupées
│   ├── hooks/
│   │   └── useTasks.js       # Hook personnalisé pour la gestion des tâches
│   ├── styles/
│   │   ├── index.css         # Styles globaux
│   │   └── App.css           # Styles de l'application
│   ├── App.jsx               # Composant principal
│   └── main.jsx              # Point d'entrée
├── index.html
├── package.json
└── vite.config.js
```

## 🔄 Logique de réinitialisation

L'application vérifie automatiquement au chargement si les tâches doivent être réinitialisées :
- Les tâches hebdomadaires sont réinitialisées après 7 jours
- Les tâches bihebdomadaires après 14 jours
- Les tâches mensuelles au changement de mois

## 💡 Utilisation

1. Cliquez sur "➕ Ajouter une tâche"
2. Entrez le nom de la tâche et sélectionnez sa fréquence
3. Cochez les tâches au fur et à mesure que vous les accomplissez
4. Utilisez les boutons ✏️ et 🗑️ pour modifier ou supprimer une tâche

## 📝 License

MIT
