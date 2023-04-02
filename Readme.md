# Kanban

 Ce projet consiste a créer une appli de todolist, avec une création de BDD avec PostgreSQL en 2 parties :
  - Un front fait en HTML/CSS(bulma)/JS
  - Une API avec Express et Sequelize

### API

#### Liste des routes à créer

| Route      | Méthode | Action | Données renvoyées |
-------------|---------|------------------------------|-----------------
| /tasks     | GET     | Récupère la liste des tâches | Liste des tâches
| /tasks     | POST    | Ajoute une nouvelle tâche | Tâche créée
| /tasks/:id | PUT     | Modifie une tâche | Tâche modifiée
| /tasks/:id | DELETE  | Supprime une tâche | Aucune donnée renvoyée


## Roadmap

### Étape 1

Lister les tâches en JSON.

### Étape 2

Création de la route POST pour ajouter une tâche. Elle recevra en JSON les données d'une tâche et renverra la tâche créée.
Test unitaire avec la fonction `handleCreateForm()`.


### Étape 3

Création de la route PUT pour modifier une tâche. Elle recevra en JSON les données d'une tâche et renverra la tâche modifiée.
Test unitaire avec la fonction  `handleEditForm()` .


### Étape 4

Création de la route DELETE pour supprimer une tâche. La réponse ne renvoie aucune donnée au serveur et le statut de la réponse doit être `204` (`No content`).
Test unitaire avec la fonction `handleDeleteButton()`


