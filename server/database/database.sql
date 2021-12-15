CREATE DATABASE first_pern_database;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40)
);

INSERT INTO users (name) VALUES
    ('spiderman');