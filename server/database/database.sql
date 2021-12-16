CREATE DATABASE first_pern_database;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40)
);

INSERT INTO users (name) VALUES
    ('spiderman');

--create a task database
CREATE DATABASE tasksdb;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE,
  description VARCHAR(255) NOT NULL,
  status VARCHAR(40)
);