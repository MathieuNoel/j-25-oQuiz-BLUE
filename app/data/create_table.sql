-- FICHIER VU EN COURS
-- Ce fichier servira à créer la structure de la base de donnée de notre application (les tables, les champs)

-- on créé une transaction pour tout annuler en cas de problème. Il suffit d'englober notre code entre les mots BEGIN et COMMIT.
BEGIN;

-- Effacer les tables existantes qui auraient le même nom que celles qu'on veut ajouter
DROP TABLE IF EXISTS "level", "user", "quiz", "question", "answer", "tag", "quiz_has_tag";

-- Créer les différentes tables
CREATE TABLE "level" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(12) NOT NULL UNIQUE
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR(25) NOT NULL,
    "lastname" VARCHAR(25) NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL
);

CREATE TABLE "quiz" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL UNIQUE,
    "description" TEXT,
    "user_id" INT REFERENCES "user"("id")
);

CREATE TABLE "question" (
    "id" SERIAL PRIMARY KEY,
    "description" TEXT NOT NULL UNIQUE,
    "anecdote" TEXT,
    "wiki" TEXT,
    "level_id" INT REFERENCES "level"("id"),
    "quiz_id" INT REFERENCES "quiz"("id"),
    -- PAS POSSIBLE CAR LA TABLE ANSWER N'EXISTE PAS ENCORE "answer_id" INT REFERENCES "answer"("id") 
    "answer_id" INT -- ici on définit juste le champ qui contiendra la clef étrangère sur answer id
);

CREATE TABLE "answer" (
    "id" SERIAL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "question_id" INT REFERENCES "question"("id")
);

CREATE TABLE "tag" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT
);

CREATE TABLE "quiz_has_tag" (
    "quiz_id" INT REFERENCES "quiz"("id"),
    "tag_id" INT REFERENCES "tag"("id"),
    PRIMARY KEY("quiz_id", "tag_id") -- ici on lui renseigne que la clef primaire de la table est constituée des deux clefs étrangères
);

-- ici on va définir la clef étrangère answer_id
ALTER TABLE "question" 
    ADD FOREIGN KEY ("answer_id") REFERENCES "answer"("id");


-- fin de transaction
COMMIT;






