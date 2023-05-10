CREATE DATABASE purchases;
\c purchases;

CREATE SCHEMA purchases;

CREATE TABLE IF NOT EXISTS purchase_entity (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR,
  price INTEGER, 
	quantity INTEGER
);

CREATE TABLE IF NOT EXISTS position_entity (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR,
  price INTEGER,
	quantity INTEGER
);


INSERT INTO purchase_entity (id, title, price, quantity) VALUES
    (1, 'bicycle', 1200, 1),
    (2, 'book', 15, 2),
    (3, 'milk', 3, 1);