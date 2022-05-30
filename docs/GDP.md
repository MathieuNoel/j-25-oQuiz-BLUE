# Gestion de Projet (GDP)

On préparre notre projet de développement web en amont.  
On va utiliser la méthode agile SCRUM.

## Recueil des besoins

### à l'arrache

- faire un quiz / faire une plateforme de quiz
- une BDD pour l'école
- php je sais pas quoi
- le MCD + des commentaires surla BDD et son fonctionnement
- systeme de login pour les eleves
- choix des quiz par theme / difficulté
- quiz ont des lvl / difficulté / sujet(s) / auteur / theme / questions avec réponses
- correction du quiz avec note finale (à ne pas stocker)
- page admin pour administrer la base

### après vérification

- Plateforme de quizz
- Système de login pour pouvoir accéder aux quizzes
- Quiz : titre, une thématique, un ou des sujets, un auteur, des questions
- Question : titre, réponses, contexte, niveau de difficulté
- Réponse : texte, correct ou non
- Chemin : login -> page des quizzes -> recap
- Recap : score + bonne / mauvaise réponse par question
- On ne stock pas le résultat du quizz
- la structure de la base de donnée : le MCD + la base
- pas besoin de page admin 

## Questions à poser au client

Pour clarifier certains points.

- Responsive ou non ? 
- Pgadmin à la place de Phpmyadmin
- nombre de questions pour les quiz
- nombre de réponses pour chaque questions
- en combien de temps tu veux avoir le site ?
- accessibilité du quiz pour les personnes handicapées ?
- as-tu des thèmes / sujets / quiz ... prédéfinis ?
- Faut-il obligatoirement se connecter pour accéder aux quizzes en lecture ?
- L'inscription est payante ?
- une seule bonne réponse par question ?
- Les questions / le contexte des questions sont du texte ou peuvent elles être autre chose (image / vidéo...) ?
- Le score est toujours noté sur 10 ? Ou c'est par rapport au nombre de questions ?
- Est-il utile de montrer la bonne réponse en cas d'erreur ?
- Y-a-t-il un système d'inscription ?
- Tu veux quoi dans ton menu ?

## Product backlog

Lister les fonctionnalités du projet sous forme de User stories / Use cases

En tant que :
- Visiteur (quelqu'un qui ne s'est pas authentifié)
- Utilisateur (quelqu'un qui s'est authentifié)
- Administrateur

|En tant que|Je veux|Afin de|Sprint
|---|---|---|---|
|visiteur|me logguer|accéder aux quizzes et creer des quizzes|2
|utilisateur|accéder aux quizzes|pour pouvoir jouer et choisir mon quiz|1
|utilisateur|accéder à un quiz en particulier|pour pouvoir y répondre|1
|utilisateur|soumettre mes réponses aux questions du quiz|obtenir mon score avec les bonnes et mauvaises réponses|1
|utilisateur|me déconnecter de ma session|quitter le site proprement|2

## Sprint backlog

Prioriser les user stories. (voir colonne sprint du product backlog au dessus).

## Mockups / Wireframes

Représentation visuelle des pages de notre projet.

Le client nous les a déjà fournies !

## MCD / MLD

MCD : Modèle Conceptuel de Données
MLD : Modèle Logique de Données

La conception de la partie base de donnée.

![MCD](docs/Quizz.svg)